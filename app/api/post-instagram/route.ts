import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir, unlink } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

// Instagram Basic Display API endpoints
const GRAPH_API_BASE = 'https://graph.facebook.com/v18.0'

export async function POST(request: NextRequest) {
  try {
    // Get environment variables
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN
    const instagramAccountId = process.env.INSTAGRAM_ACCOUNT_ID
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

    if (!accessToken || !instagramAccountId) {
      return NextResponse.json(
        { 
          error: 'Missing Instagram API credentials. Please check INSTAGRAM_ACCESS_TOKEN and INSTAGRAM_ACCOUNT_ID environment variables.' 
        },
        { status: 500 }
      )
    }

    // Parse form data
    const formData = await request.formData()
    const file = formData.get('file') as File
    const caption = formData.get('caption') as string

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    // Check file type and size
    const isImage = file.type.startsWith('image/')
    const isVideo = file.type.startsWith('video/')
    
    if (!isImage && !isVideo) {
      return NextResponse.json(
        { error: 'Only image and video files are supported' },
        { status: 400 }
      )
    }

    // Check file size (Instagram limits: 8MB for images, 100MB for videos)
    const maxSize = isImage ? 8 * 1024 * 1024 : 100 * 1024 * 1024
    if (file.size > maxSize) {
      return NextResponse.json(
        { 
          error: `File too large. Maximum size: ${isImage ? '8MB for images' : '100MB for videos'}` 
        },
        { status: 400 }
      )
    }

    let tempFilePath: string | null = null

    try {
      // Step 1: Save file temporarily
      tempFilePath = await saveFileTemporarily(file)
      const mediaUrl = `${baseUrl}/api/temp/${path.basename(tempFilePath)}`

      // Step 2: Create Instagram media container
      const containerResponse = await createMediaContainer(
        mediaUrl,
        caption,
        accessToken,
        instagramAccountId,
        isVideo
      )

      if (!containerResponse.success) {
        return NextResponse.json(
          { error: containerResponse.error },
          { status: 500 }
        )
      }

      // Step 3: Wait a moment for Instagram to process the media
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Step 4: Publish the media
      const publishResponse = await publishMedia(
        containerResponse.containerId!,
        accessToken,
        instagramAccountId
      )

      if (!publishResponse.success) {
        return NextResponse.json(
          { error: publishResponse.error },
          { status: 500 }
        )
      }

      return NextResponse.json({
        success: true,
        message: 'Successfully posted to Instagram!',
        postId: publishResponse.postId
      })

    } finally {
      // Clean up temporary file
      if (tempFilePath) {
        try {
          await unlink(tempFilePath)
        } catch (error) {
          console.error('Failed to delete temporary file:', error)
        }
      }
    }

  } catch (error) {
    console.error('Instagram posting error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function saveFileTemporarily(file: File): Promise<string> {
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  // Create temp directory if it doesn't exist
  const tempDir = path.join(process.cwd(), 'temp')
  if (!existsSync(tempDir)) {
    await mkdir(tempDir, { recursive: true })
  }

  // Generate unique filename
  const timestamp = Date.now()
  const fileName = `${timestamp}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`
  const filePath = path.join(tempDir, fileName)

  await writeFile(filePath, buffer)
  return filePath
}

async function createMediaContainer(
  mediaUrl: string,
  caption: string,
  accessToken: string,
  instagramAccountId: string,
  isVideo: boolean
): Promise<{ success: boolean; containerId?: string; error?: string }> {
  try {
    const params = new URLSearchParams({
      access_token: accessToken,
      caption: caption || ''
    })

    if (isVideo) {
      params.set('media_type', 'VIDEO')
      params.set('video_url', mediaUrl)
    } else {
      params.set('image_url', mediaUrl)
    }

    const response = await fetch(
      `${GRAPH_API_BASE}/${instagramAccountId}/media`,
      {
        method: 'POST',
        body: params,
      }
    )

    const data = await response.json()

    if (!response.ok) {
      console.error('Container creation failed:', data)
      return {
        success: false,
        error: data.error?.message || 'Failed to create media container'
      }
    }

    return {
      success: true,
      containerId: data.id
    }

  } catch (error) {
    console.error('Media container creation error:', error)
    return {
      success: false,
      error: 'Failed to create media container'
    }
  }
}

async function publishMedia(
  containerId: string,
  accessToken: string,
  instagramAccountId: string
): Promise<{ success: boolean; postId?: string; error?: string }> {
  try {
    const params = new URLSearchParams({
      creation_id: containerId,
      access_token: accessToken
    })

    const response = await fetch(
      `${GRAPH_API_BASE}/${instagramAccountId}/media_publish`,
      {
        method: 'POST',
        body: params,
      }
    )

    const data = await response.json()

    if (!response.ok) {
      console.error('Publishing failed:', data)
      return {
        success: false,
        error: data.error?.message || 'Failed to publish media'
      }
    }

    return {
      success: true,
      postId: data.id
    }

  } catch (error) {
    console.error('Publishing error:', error)
    return {
      success: false,
      error: 'Failed to publish media'
    }
  }
}
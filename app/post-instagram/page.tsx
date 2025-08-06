'use client'

import { useState } from 'react'

export default function PostInstagram() {
  const [file, setFile] = useState<File | null>(null)
  const [caption, setCaption] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!file) {
      setMessage('Please select a file to upload')
      return
    }

    setIsLoading(true)
    setMessage('')

    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('caption', caption)

      const response = await fetch('/api/post-instagram', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (response.ok) {
        setMessage('Successfully posted to Instagram!')
        setFile(null)
        setCaption('')
        // Reset file input
        const fileInput = document.getElementById('file-input') as HTMLInputElement
        if (fileInput) fileInput.value = ''
      } else {
        setMessage(result.error || 'Failed to post to Instagram')
      }
    } catch (error) {
      setMessage('An error occurred while posting to Instagram')
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-base-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Post to Instagram</h1>
        
        <div className="card w-full bg-base-200 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* File Upload */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Select Image/Video</span>
                </label>
                <input
                  id="file-input"
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleFileChange}
                  className="file-input file-input-bordered w-full"
                  required
                />
                {file && (
                  <div className="mt-2 text-sm text-gray-600">
                    Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                  </div>
                )}
              </div>

              {/* Caption */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Caption</span>
                </label>
                <textarea
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  className="textarea textarea-bordered h-24"
                  placeholder="Write your caption here..."
                />
              </div>

              {/* Submit Button */}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-primary"
                >
                  {isLoading ? (
                    <>
                      <span className="loading loading-spinner loading-sm"></span>
                      Posting...
                    </>
                  ) : (
                    'Post to Instagram'
                  )}
                </button>
              </div>
            </form>

            {/* Message Display */}
            {message && (
              <div className={`alert mt-4 ${message.includes('Successfully') ? 'alert-success' : 'alert-error'}`}>
                <span>{message}</span>
              </div>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 p-4 bg-base-300 rounded-lg">
          <h3 className="font-semibold mb-2">Instructions:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Select an image or video file to upload</li>
            <li>Add an optional caption for your post</li>
            <li>Click "Post to Instagram" to publish</li>
            <li>Make sure your Instagram Business account is properly configured</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
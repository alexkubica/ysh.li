# Instagram Posting Setup Guide

This guide will help you set up the Instagram posting functionality for your Next.js application.

## Overview

The Instagram posting feature allows users to upload images/videos and post them directly to Instagram through the Meta Graph API. The implementation includes:

- File upload interface at `/post-instagram`
- API route handling Instagram posting
- Temporary file storage and cleanup
- Environment variable configuration

## Prerequisites

1. **Instagram Business Account**: You need an Instagram Business account (not a personal account)
2. **Facebook Page**: Your Instagram Business account must be connected to a Facebook Page
3. **Meta App**: You need to create an app in Meta for Developers

## Setup Instructions

### 1. Create a Meta App

1. Go to [Meta for Developers](https://developers.facebook.com/)
2. Click "My Apps" → "Create App"
3. Choose "Business" as the app type
4. Fill in your app details
5. Add Instagram Basic Display and/or Instagram Graph API products

### 2. Configure Instagram Basic Display

1. In your Meta app dashboard, go to "Instagram Basic Display"
2. Click "Create New App"
3. Add your OAuth Redirect URI: `https://yourdomain.com/auth/instagram/callback`
4. Note down your:
   - Instagram App ID
   - Instagram App Secret

### 3. Get Long-lived Access Token

#### Method 1: Using Graph API Explorer (Recommended)

1. Go to [Graph API Explorer](https://developers.facebook.com/tools/explorer/)
2. Select your app
3. Generate a User Access Token with these permissions:
   - `instagram_basic`
   - `pages_show_list`
   - `pages_read_engagement`
4. Convert to long-lived token using:
   ```
   GET /oauth/access_token?grant_type=fb_exchange_token&client_id={app-id}&client_secret={app-secret}&fb_exchange_token={short-lived-token}
   ```

#### Method 2: Using Instagram Basic Display Flow

1. Build OAuth flow using Instagram Basic Display API
2. Exchange code for access token
3. Convert to long-lived token

### 4. Get Instagram Account ID

Use the Graph API Explorer or make a request to:
```
GET /me/accounts?access_token={your-access-token}
```

Then for each page, get connected Instagram accounts:
```
GET /{page-id}?fields=instagram_business_account&access_token={your-access-token}
```

### 5. Environment Variables

Create a `.env.local` file in your project root:

```env
# Instagram API Configuration
INSTAGRAM_ACCESS_TOKEN=your_long_lived_access_token_here
INSTAGRAM_ACCOUNT_ID=your_instagram_business_account_id_here
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

**Important Notes:**
- Use your actual domain for `NEXT_PUBLIC_BASE_URL` in production
- Keep your access token secure and never commit it to version control
- Access tokens expire (long-lived tokens last ~60 days for Instagram Basic Display)

## File Structure

```
app/
├── post-instagram/
│   ├── page.tsx          # Frontend upload interface
│   └── route.ts          # API route for Instagram posting
└── api/
    └── temp/
        └── [filename]/
            └── route.ts   # Serves temporary uploaded files
```

## How It Works

1. **File Upload**: User selects image/video and optional caption
2. **Temporary Storage**: File is saved temporarily on server
3. **Media Container**: Create Instagram media container via Graph API
4. **Publishing**: Publish the media container to Instagram
5. **Cleanup**: Remove temporary file from server

## Supported File Types

- **Images**: JPEG, PNG, GIF, WebP (max 8MB)
- **Videos**: MP4, MOV, AVI (max 100MB)

## API Endpoints

### POST /post-instagram
Posts content to Instagram

**Request**: FormData with:
- `file`: Image or video file
- `caption`: Optional caption text

**Response**: 
```json
{
  "success": true,
  "message": "Successfully posted to Instagram!",
  "postId": "instagram_post_id"
}
```

### GET /api/temp/[filename]
Serves temporary uploaded files (used internally by Instagram)

## Error Handling

The implementation includes comprehensive error handling for:
- Missing environment variables
- Invalid file types/sizes
- Instagram API errors
- Network failures
- File system errors

## Security Considerations

1. **File Validation**: Only allows image/video files with size limits
2. **Path Security**: Prevents directory traversal attacks
3. **Temporary Storage**: Files are automatically cleaned up
4. **Access Control**: Consider adding authentication to the upload page

## Troubleshooting

### Common Issues

1. **"Missing Instagram API credentials"**
   - Ensure environment variables are set correctly
   - Check that `.env.local` is in the project root

2. **"Failed to create media container"**
   - Verify your access token is valid and not expired
   - Check that your Instagram account ID is correct
   - Ensure the file URL is publicly accessible

3. **"Failed to publish media"**
   - Instagram may still be processing the media, try waiting longer
   - Check that your Instagram account has posting permissions

### Token Refresh

Long-lived tokens expire after ~60 days. Set up a refresh mechanism:

```javascript
// Refresh long-lived token
GET /oauth/access_token?grant_type=fb_exchange_token&client_id={app-id}&client_secret={app-secret}&fb_exchange_token={current-token}
```

## Production Considerations

1. **File Storage**: Consider using AWS S3, Cloudinary, or similar for file storage
2. **Rate Limiting**: Implement rate limiting to prevent abuse
3. **Authentication**: Add user authentication before allowing uploads
4. **Monitoring**: Monitor API usage and error rates
5. **Scaling**: Consider queue-based processing for high volume

## Useful Links

- [Meta for Developers](https://developers.facebook.com/)
- [Instagram Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api)
- [Instagram Graph API](https://developers.facebook.com/docs/instagram-api)
- [Graph API Explorer](https://developers.facebook.com/tools/explorer/)
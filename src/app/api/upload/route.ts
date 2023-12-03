import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.formData()
  body.append('UPLOADCARE_PUB_KEY', process.env.UPLOADCARE_PUB_KEY)

  const response = await fetch('https://upload.uploadcare.com/base/?jsonerrors=1', {
    method: 'POST',
    body
  })
  const data = await response.json()

  const previewURL = `https://ucarecdn.com/${data.file}/`

  return new Response(JSON.stringify({ previewURL }), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.formData()

  const headers = new Headers()
  headers.append('Authorization', 'Client-ID e4f58fc81daec99')

  const response = await fetch('https://api.imgur.com/3/image', {
    method: 'POST',
    headers,
    body
  })
  const data = await response.json()

  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

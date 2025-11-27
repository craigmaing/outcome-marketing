import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Outcome Marketing - Digital Marketing Agency Cornwall'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #3D7A7A 0%, #2D5A5A 100%)', // trevaunance-teal to trevaunance-teal-dark
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 'bold', color: 'white', marginBottom: '20px' }}>
          Outcome Marketing
        </div>
        <div style={{ fontSize: 32, color: 'rgba(255,255,255,0.9)' }}>
          Digital Marketing Agency | Cornwall, UK
        </div>
        <div style={{ fontSize: 24, color: 'rgba(255,255,255,0.7)', marginTop: '20px' }}>
          Website Design • SEO • Blog Writing • Research
        </div>
      </div>
    ),
    { ...size }
  )
}

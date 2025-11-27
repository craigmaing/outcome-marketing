import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Outcome Marketing',
    short_name: 'Outcome',
    description: 'Cornwall-based digital marketing agency specializing in website design, SEO, and blog writing for small businesses',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3D7A7A',
    icons: [
      {
        src: '/logo-black.png',
        sizes: 'any',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}

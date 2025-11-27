import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found | Outcome Marketing',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cottage-cream">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-trevaunance-teal mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-slate-deep mb-4">Page Not Found</h2>
        <p className="text-secondary-text mb-8 max-w-md">
          Sorry, we couldn't find the page you're looking for. It may have been moved or no longer exists.
        </p>
        <div className="space-x-4">
          <Link
            href="/"
            className="inline-block bg-trevaunance-teal text-white px-6 py-3 rounded-lg hover:bg-trevaunance-teal-dark transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-block border border-trevaunance-teal text-trevaunance-teal px-6 py-3 rounded-lg hover:bg-cottage-cream transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}

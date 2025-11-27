export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cottage-cream">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-trevaunance-teal mx-auto mb-4"></div>
        <p className="text-secondary-text">Loading...</p>
      </div>
    </div>
  )
}

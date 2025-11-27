export default function BlogLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-mist-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-trevaunance-teal mx-auto mb-4"></div>
        <p className="text-secondary-text">Loading blog content...</p>
      </div>
    </div>
  )
}

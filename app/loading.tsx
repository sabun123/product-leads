export default function loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-6 text-center">
        <div className="w-16 h-16 mx-auto border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-400">Loading amazing things...</p>
      </div>
    </div>
  )
}
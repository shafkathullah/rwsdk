export function StudentListSkeleton() {
  return (
    <div className="space-y-2">
      <div className="grid gap-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-md bg-white animate-pulse"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-24"></div>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="px-2 py-1 h-6 bg-gray-200 rounded w-12"></div>
              <div className="px-2 py-1 h-6 bg-gray-200 rounded w-16"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

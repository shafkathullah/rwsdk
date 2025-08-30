import { Suspense } from "react";
import { RequestInfo } from "rwsdk/worker";
import { AnimalList } from "@/app/components/AnimalList";

function LoadingSkeleton() {
  return (
    <div className="grid gap-3">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="p-4 bg-gray-100 border border-gray-200 rounded-lg animate-pulse"
        >
          <div className="h-6 bg-gray-300 rounded w-24"></div>
        </div>
      ))}
    </div>
  );
}

export function Animals({ request }: RequestInfo) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Animals</h1>
            <a
              href="/fruits"
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              View Fruits
            </a>
          </div>

          <Suspense fallback={<LoadingSkeleton />}>
            <AnimalList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
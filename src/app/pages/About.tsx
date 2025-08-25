import { RequestInfo } from "rwsdk/worker";

export function About({ ctx }: RequestInfo) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          About
        </h1>
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <p className="text-gray-600 text-lg leading-relaxed">
            This is a minimal RedwoodSDK starter project showcasing server-side
            rendering, client-side hydration, and modern styling with Tailwind
            CSS.
          </p>
        </div>
        <div className="text-center">
          <a
            href="/"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

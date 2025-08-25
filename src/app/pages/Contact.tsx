import { RequestInfo } from "rwsdk/worker";

export function Contact({ ctx }: RequestInfo) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Contact
        </h1>
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-2xl mr-4">📧</span>
              <span className="text-gray-700">hello@example.com</span>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-2xl mr-4">🌐</span>
              <span className="text-gray-700">https://rwsdk.com</span>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <span className="text-2xl mr-4">💬</span>
              <span className="text-gray-700">Join our community</span>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a
            href="/"
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

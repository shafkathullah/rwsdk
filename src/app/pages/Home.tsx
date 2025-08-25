import { Suspense } from "react";
import { RequestInfo } from "rwsdk/worker";
import Comp1 from "@/app/components/Comp1";
import Comp2 from "@/app/components/Comp2";
import SkeletonComp from "@/app/components/SkeletonComp";

export function Home({ ctx }: RequestInfo) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Hello World
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Component 1
            </h2>
            <Suspense fallback={<SkeletonComp />}>
              <Comp1 />
            </Suspense>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Component 2
            </h2>
            <Suspense fallback={<SkeletonComp />}>
              <Comp2 />
            </Suspense>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Sample List
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Item 1
            </li>
            <li className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              Item 2
            </li>
            <li className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
              Item 3
            </li>
          </ul>
        </div>

        <nav className="flex justify-center space-x-4">
          <a
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Home
          </a>
          <a
            href="/about"
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
          >
            About
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}

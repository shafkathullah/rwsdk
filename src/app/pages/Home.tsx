import { Suspense } from "react";
import { RequestInfo } from "rwsdk/worker";
import Comp1 from "@/app/components/Comp1";
import Comp2 from "@/app/components/Comp2";
import SkeletonComp from "@/app/components/SkeletonComp";

export function Home({ ctx }: RequestInfo) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-blue-600 bg-clip-text text-transparent mb-12 text-center tracking-tight">
          Hello World
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 tracking-tight">
              Component 1
            </h2>
            <Suspense fallback={<SkeletonComp />}>
              <Comp1 />
            </Suspense>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 tracking-tight">
              Component 2
            </h2>
            <Suspense fallback={<SkeletonComp />}>
              <Comp2 />
            </Suspense>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8 mb-12 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 tracking-tight">
            Sample List
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 border border-blue-100">
              <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4 shadow-sm"></span>
              <span className="text-slate-700 font-medium">Item 1</span>
            </li>
            <li className="flex items-center p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl hover:from-emerald-100 hover:to-green-100 transition-all duration-200 border border-emerald-100">
              <span className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full mr-4 shadow-sm"></span>
              <span className="text-slate-700 font-medium">Item 2</span>
            </li>
            <li className="flex items-center p-4 bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl hover:from-violet-100 hover:to-purple-100 transition-all duration-200 border border-violet-100">
              <span className="w-3 h-3 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full mr-4 shadow-sm"></span>
              <span className="text-slate-700 font-medium">Item 3</span>
            </li>
          </ul>
        </div>

        <nav className="flex justify-center space-x-6">
          <a
            href="/"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Home
          </a>
          <a
            href="/about"
            className="px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-2xl hover:from-slate-700 hover:to-slate-800 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            About
          </a>
          <a
            href="/contact"
            className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-2xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}

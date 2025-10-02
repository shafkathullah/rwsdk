"use client";

import { navigate } from "rwsdk/client";

interface TodoFiltersProps {
  filter: string;
  totalCount: number;
  completedCount: number;
}

export function TodoFilters({
  filter,
  totalCount,
  completedCount,
}: TodoFiltersProps) {
  return (
    <div className="mb-6">
      <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
        <button
          onClick={() => navigate("/?filter=all")}
          className={`flex-1 px-3 py-2 text-sm font-medium rounded-md text-center transition-colors ${
            filter === "all"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          All ({totalCount})
        </button>
        <button
          onClick={() => navigate("/?filter=active")}
          className={`flex-1 px-3 py-2 text-sm font-medium rounded-md text-center transition-colors ${
            filter === "active"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Active ({totalCount - completedCount})
        </button>
        <button
          onClick={() => navigate("/?filter=completed")}
          className={`flex-1 px-3 py-2 text-sm font-medium rounded-md text-center transition-colors ${
            filter === "completed"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Completed ({completedCount})
        </button>
      </div>
    </div>
  );
}

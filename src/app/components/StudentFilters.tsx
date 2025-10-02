"use client";

import { YEARS, MAJORS } from "@/app/students";
import { navigate } from "rwsdk/client";
import { useTransition } from "react";

interface StudentFiltersProps {
  yearFilter: string;
  majorFilter: string;
  totalCount: number;
  filteredCount: number;
}

export function StudentFilters({
  yearFilter,
  majorFilter,
  totalCount,
  filteredCount,
}: StudentFiltersProps) {
  // usetransition

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Year</label>
          <select
            value={yearFilter}
            onChange={(e) => {
              const params = new URLSearchParams();
              if (e.target.value !== "all") params.set("year", e.target.value);
              if (majorFilter !== "all") params.set("major", majorFilter);
              navigate(`/students?${params.toString()}`);
            }}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Years</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Major
          </label>
          <select
            value={majorFilter}
            onChange={(e) => {
              const params = new URLSearchParams();
              if (yearFilter !== "all") params.set("year", yearFilter);
              if (e.target.value !== "all") params.set("major", e.target.value);
              navigate(`/students?${params.toString()}`);
            }}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Majors</option>
            {MAJORS.map((major) => (
              <option key={major} value={major}>
                {major}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="text-sm text-gray-600">
        <span>
          Showing {filteredCount} of {totalCount} students
        </span>
      </div>
    </div>
  );
}

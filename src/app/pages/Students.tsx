import { RequestInfo } from "rwsdk/worker";
import { Suspense } from "react";
import { filterAndSortStudents, getStudents } from "@/app/students";
import { StudentFilters } from "@/app/components/StudentFilters";
import { StudentList } from "@/app/components/StudentList";
import { StudentListSkeleton } from "@/app/components/StudentListSkeleton";

export async function Students({ request }: RequestInfo) {
  const url = new URL(request.url);
  const yearFilter = url.searchParams.get("year") || "all";
  const majorFilter = url.searchParams.get("major") || "all";

  const allStudents = await getStudents();
  const filteredStudents = filterAndSortStudents(
    allStudents,
    yearFilter,
    majorFilter,
    "name"
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Student Directory
          </h1>

          <StudentFilters
            yearFilter={yearFilter}
            majorFilter={majorFilter}
            totalCount={allStudents.length}
            filteredCount={filteredStudents.length}
          />

          <Suspense fallback={<StudentListSkeleton />}>
            <StudentList filteredStudents={filteredStudents} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

import { getStudents, filterAndSortStudents, Student } from "@/app/students";

type StudentListProps = {
  filteredStudents: Student[];
};

export async function StudentList({ filteredStudents }: StudentListProps) {
  return (
    <div className="space-y-2">
      {filteredStudents.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          No students found matching the selected filters.
        </p>
      ) : (
        <div className="grid gap-3">
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-md bg-white hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {student.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {student.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {student.year} Year • {student.major}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                  {student.year}
                </span>
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">
                  {student.major}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

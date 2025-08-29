export interface Student {
  id: string;
  name: string;
  year: "1st" | "2nd" | "3rd" | "4th";
  major: string;
}

// Mock student data - in a real app this would come from a database
const mockStudents: Student[] = [
  { id: "1", name: "Alice Johnson", year: "2nd", major: "CS" },
  { id: "2", name: "Bob Smith", year: "1st", major: "EC" },
  { id: "3", name: "Carol Williams", year: "3rd", major: "ELEC" },
  { id: "4", name: "David Brown", year: "4th", major: "CS" },
  { id: "5", name: "Emma Davis", year: "2nd", major: "ELEC" },
  { id: "6", name: "Frank Miller", year: "1st", major: "EC" },
  { id: "7", name: "Grace Wilson", year: "3rd", major: "CS" },
  { id: "8", name: "Henry Moore", year: "4th", major: "ELEC" },
  { id: "9", name: "Isabel Taylor", year: "2nd", major: "CS" },
  { id: "10", name: "Jack Anderson", year: "1st", major: "EC" },
];

export async function getStudents(): Promise<Student[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return mockStudents;
}

export function filterAndSortStudents(
  students: Student[],
  yearFilter?: string,
  majorFilter?: string,
  sortBy: "name" = "name"
): Student[] {
  let filtered = students;

  if (yearFilter && yearFilter !== "all") {
    filtered = filtered.filter((student) => student.year === yearFilter);
  }

  if (majorFilter && majorFilter !== "all") {
    filtered = filtered.filter((student) => student.major === majorFilter);
  }

  // Sort by name
  if (sortBy === "name") {
    filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  return filtered;
}

export const YEARS = ["1st", "2nd", "3rd", "4th"] as const;
export const MAJORS = ["CS", "EC", "ELEC"] as const;

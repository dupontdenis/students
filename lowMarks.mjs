import { displayStudents } from "./studentDisplay.mjs";

export function setupLowMark(students) {
  document
    .getElementById("filter-low-marks")
    .addEventListener("click", () => filterStudents(students));
}

const filterStudents = (students) => {
  const filteredStudents = students.filter((student) =>
    student.marks.some((mark) => mark < 5)
  );

  // Add a special class to students with low marks
  const studentsWithClass = students.map((student) => {
    if (filteredStudents.includes(student)) {
      return { ...student, lowMark: true };
    }
    return student;
  });

  displayStudents(studentsWithClass);
};

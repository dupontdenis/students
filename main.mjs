import students from "./students.mjs";
import { displayStudents } from "./studentDisplay.mjs";
import { setupResetButton } from "./reset.mjs";
import { setupSortButton } from "./sort.mjs";

// Initial display of students
displayStudents(students);

// Setup event listeners for buttons
setupResetButton(students);
setupSortButton(students);
jsonString = [
  '{ "studentId": 7530, "name": "Robert Lee", "graduating": true }',
  '{ "name": "Carlin B.", "graduating": true }',
  '{ "studentId": 6679, "name": "Jack Smith", "graduating": false }',
];

console.log("Graduating: " + whoIsGraduating(jsonString));
// Graduating: Robert Lee, Carlin B.

console.log("Graduating: " + recordFunction(jsonString));
// Graduating: Robert Lee, Carlin B.

console.log("Graduating: " + includesError(jsonString));
// Error: student.includes is not a function

function whoIsGraduating(studentsRecordDetails) {
  let students = studentsRecordDetails.map((student) => JSON.parse(student));
  let graduatingStudents = students.filter((student) => student.graduating);
  let names = graduatingStudents.map((student) => student.name);
  return names.join(", ");
}

function recordFunction(studentsRecordDetails) {
  return studentsRecordDetails
    .map(function (student) {
      return JSON.parse(student); // Parse each student record into an object
    })
    .filter((student) => student.graduating) // Filter out students who are not graduating
    .reduce(function (accumulator, currentValue) {
      return (
        (accumulator.name ? accumulator.name : accumulator) +
        ", " +
        currentValue.name
      ); // Concatenate the names of the students who are graduating
    });
}

function includesError(studentsRecordDetails) {
  return studentsRecordDetails
    .map(function (student) {
      return JSON.parse(student);
    })
    .filter((student) => student.includes(true)) // error: student.includes is not a function
    .reduce(function (accumulator, currentValue, index) {
      return (
        (accumulator.name ? accumulator.name : accumulator) +
        ", " +
        currentValue.name
      );
    });
}

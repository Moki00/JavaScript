// get this code below to output "Robert Lee, Carlin B."

console.log(
  fo([
    '{"studentId": 7530, "name": "Robert Lee", "graduating": true}',
    '{"name": "Carlin B.", "graduating": true}',
    '{"studentId": 6679, "name": "Jacqui Ostermann", "graduating": false}',
  ])
);

function fo(studentsRecordDetails) {
  return studentsRecordDetails
    .map(function (student) {
      return JSON.parse(student);
    })
    .filter((student) => student.includes(true))
    .reduce(function (accumulator, currentValue, index) {
      return (
        (accumulator.name ? accumulator.name : accumulator) +
        ", " +
        currentValue.name
      );
    });
}

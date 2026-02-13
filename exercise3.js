
// Exercise 3A
let classRoster = ["Alice", "Tom", "Charlie", "Diana","Evan"]

console.log(classRoster)
console.log(classRoster.toString())
console.log(classRoster)

classRoster.push("Fiona")
classRoster.push("Nancy")

console.log(classRoster.shift())

console.log(classRoster)

console.log("classRoster length: " + classRoster.length)

// Exercise 3B
let classInfo = {
    className: "ENSF381: Full-Stack Web Development",
    instructor: "Dr. Smith",
    students: classRoster,
    details: {
        semester: 'Winter',
        year: 2025
    },
}

classInfo.schedule = ["Monday", "Wednesday", "Friday"]
classInfo.instructor = 'Dr.Abdellatif'

console.log(`Class Name is ${classInfo.className}\n
    The Instructor is ${classInfo.instructor}\n
    The students of the class are:\n
    ${classInfo.students}`
)

console.log(`Semester: ${classInfo.details.semester}`)

console.log(classInfo)
const {className, students} = classInfo
console.log(`className: ${className}\nstudents: ${students}`)

const {semester, year} = classInfo.details
console.log(`semester: ${semester}\nyear: ${year}`)

const [student1, student2]= classInfo.students
const remainingStudents = classInfo.students.slice(2)

console.log(`student1: ${student1}\nstudent2: ${student2}\nremainingStudents: ${remainingStudents}`)
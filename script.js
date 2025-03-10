const gpaGrade = [4.0, 4.0, 3.0, 2.0, 1.0, 0.0]
const igGrade = {
    "A*": (90-100),
    "A": (80-89),
    "B": (70-79),
    "C": (60-69),
    "D": (50-59),
    "E": (40-49)
}

let subjects = ["Math", "English", "Biology", "History", "Computer Science"]

let mathScore = subjects[0] + " = " + gpaGrade[2]

console.log(mathScore)
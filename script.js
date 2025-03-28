let nameResult = document.getElementById("name-result")
let schoolResult = document.getElementById("school-result")
let yearResult = document.getElementById("year-result")
let gpaResult = document.getElementById("gpa-result")
let studentName = document.getElementById("studentName")
let schoolName= document.getElementById("schoolName")
let currentYear = document.getElementById("currentYear")

const gradeToGPA = {
  "A*": 4.0,
  A: 4.0,
  B: 3.0,
  C: 2.0,
  D: 1.0,
  E: 0.0,
};

function calculateDetailedGPA() {
  const subjectIds = [
    "mathGrade",
    "engLangGrade",
    "engLitGrade",
    "bioGrade",
    "chemGrade",
    "phyGrade",
    "historyGrade",
    "geoGrade",
    "econGrade",
    "csGrade",
    "busGrade",
    "artGrade",
    "frenchGrade",
    "spanishGrade",
    "germanGrade",
    "peGrade",
    "musicGrade",
    "dramaGrade",
  ];

  // Collect grades
  const grades = subjectIds
    .map((id) => {
      const gradeInput = document.getElementById(id).value.trim().toUpperCase();
      return gradeInput;
    })
    .filter((grade) => grade !== "" && gradeToGPA.hasOwnProperty(grade));

  // Calculate GPA
  if (grades.length === 0) {
    document.getElementById("gpaResult").textContent =
      "No valid grades entered";
    return;
  }

  const gpaValues = grades.map((grade) => gradeToGPA[grade]);
  const totalGPA = gpaValues.reduce((sum, gpa) => sum + gpa, 0);
  const finalGPA = (totalGPA / grades.length).toFixed(2);

  // Display result
  document.getElementById("gpaResult").textContent = finalGPA;
  gpaResult.innerText = finalGPA
  nameResult.innerText = studentName.value
  schoolResult.innerText = schoolName.value
  yearResult.innerText = currentYear.value
}
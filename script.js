const gradeToGPA = {
    "A*": 4.0,
    "A": 4.0,
    "B": 3.0,
    "C": 2.0,
    "D": 1.0,
    "E": 0.0,
};

function calculateDetailedGPA() {
    const subjectIds = [
        'mathGrade', 'engLangGrade', 'engLitGrade', 'bioGrade', 'chemGrade', 
        'phyGrade', 'historyGrade', 'geoGrade', 'econGrade', 'csGrade', 
        'busGrade', 'artGrade', 'frenchGrade', 'spanishGrade', 'germanGrade', 
        'peGrade', 'musicGrade', 'dramaGrade'
    ];

    // Collect grades
    const grades = subjectIds.map(id => {
        const gradeInput = document.getElementById(id).value.trim().toUpperCase();
        return gradeInput;
    }).filter(grade => grade !== '' && gradeToGPA.hasOwnProperty(grade));

    // Calculate GPA
    if (grades.length === 0) {
        document.getElementById('gpaResult').textContent = 'No valid grades entered';
        return;
    }

    const gpaValues = grades.map(grade => gradeToGPA[grade]);
    const totalGPA = gpaValues.reduce((sum, gpa) => sum + gpa, 0);
    const finalGPA = (totalGPA / grades.length).toFixed(2);

    // Display result
    document.getElementById('gpaResult').textContent = finalGPA;
}
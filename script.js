let numOfSubjects = 1;

function addInput() {
  numOfSubjects++;
  const inputFields = document.getElementById('inputFields');
  const newInput = `
    <div>
      <input type="text" placeholder="Enter Marks" class="marksInput">
      <input type="text" placeholder="Enter Credits" class="creditsInput">
    </div>
  `;
  inputFields.innerHTML += newInput;
}
function calculateGPA() {
    let totalCredits = 0;
    let totalGpaTimesCredits = 0;
    let totalMarks = 0;
    const marksInputs = document.getElementsByClassName('marksInput');
    const creditsInputs = document.getElementsByClassName('creditsInput');
  
    for (let i = 0; i < numOfSubjects; i++) {
      const marks = parseFloat(marksInputs[i].value);
      const credits = parseFloat(creditsInputs[i].value);
      if (isNaN(marks) || isNaN(credits) || marks < 0 || marks > 100) {
        alert('Please enter valid marks and credits');
        return;
      }
      const gpa = calculateGpaFromMarks(marks);
      totalCredits += credits;
      totalGpaTimesCredits += gpa * credits;
      totalMarks += marks;
    }}
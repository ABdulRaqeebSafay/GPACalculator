const maxCredits = 25;
const maxSubjects = 8;

function addInput() {
  const numOfSubjects = document.getElementsByClassName('marksInput').length;
  if (numOfSubjects >= maxSubjects) {
    alert('Maximum number of subjects reached');
    return;
  }

  const inputFields = document.getElementById('inputFields');
  const newInput = `
    <div>
      <input type="text" placeholder="Enter Marks" class="marksInput">
      <input type="text" placeholder="Enter Credits" class="creditsInput">
      <button onclick="removeInput(this)">Remove Subject</button>
    </div>
  `;
  inputFields.insertAdjacentHTML('beforeend', newInput);
}

function removeInput(button) {
  button.parentElement.remove();
}

function calculateGPA() {
  const numOfSubjects = document.getElementsByClassName('marksInput').length;
  if (numOfSubjects === 0) {
    alert('Please add at least one subject');
    return;
  }

  let totalCredits = 0;
  let totalGpaTimesCredits = 0;
  let totalMarks = 0;
  const marksInputs = document.getElementsByClassName('marksInput');
  const creditsInputs = document.getElementsByClassName('creditsInput');

  for (let i = 0; i < numOfSubjects; i++) {
    const marks = parseFloat(marksInputs[i].value);
    const credits = parseFloat(creditsInputs[i].value);
    if (isNaN(marks) || isNaN(credits) || marks < 0 || marks > 100 || credits < 1 || credits > 5) {
      alert('Please enter valid marks and credits');
      return;
    }
    const gpa = calculateGpaFromMarks(marks);
    totalCredits += credits;
    totalGpaTimesCredits += gpa * credits;
    totalMarks += marks;
  }

  if (totalCredits > 25) {
    alert('Total credits exceed the maximum limit of 25');
    return;
  }

  const gpa = totalGpaTimesCredits / totalCredits;
  const averageMarks = totalMarks / numOfSubjects;
  const output = `
    <h2>Transcript Information</h2>
    <p>Total Marks: ${totalMarks}</p>
    <p>Average Marks: ${averageMarks.toFixed(2)}</p>
    <p>Total Credits: ${totalCredits}</p>
    <p>Total GPA: ${gpa.toFixed(2)}</p>
  `;
  document.getElementById('output').innerHTML = output;
}


function calculateGpaFromMarks(marks) {
  if (marks >= 90 && marks <= 100) {
    return 4.0;
  } else if (marks >= 80 && marks < 90) {
    return 3.0;
  } else if (marks >= 70 && marks < 80) {
    return 2.0;
  } else if (marks >= 60 && marks < 70) {
    return 1.0;
  } else {
    return 0.0;
  }
}
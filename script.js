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

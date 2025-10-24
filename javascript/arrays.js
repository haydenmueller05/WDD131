// Activity 1 - Map
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = `<h2>Activity 1</h2>${stepsHtml.join("")}`;

// Activity 2 - Map
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  if (grade === "A") return 4;
  else if (grade === "B") return 3;
  else if (grade === "C") return 2;
  else if (grade === "D") return 1;
  else return 0;
}
const gpaPoints = grades.map(convertGradeToPoints);

// Activity 3 - Reduce
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

// Activity 4 - Filter
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter((word) => word.length < 6);

// Activity 5 - indexOf
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = myArray.indexOf(luckyNumber);

document.body.innerHTML += `
  <h2>Activity 2</h2>
  <p>Grades: ${grades.join(", ")}</p>
  <p>GPA Points: ${gpaPoints.join(", ")}</p>

  <h2>Activity 3</h2>
  <p>Average GPA: ${gpa}</p>

  <h2>Activity 4</h2>
  <p>Short words (less than 6 letters): ${shortWords.join(", ")}</p>

  <h2>Activity 5</h2>
  <p>Array: ${myArray.join(", ")}</p>
  <p>Lucky Number: ${luckyNumber}</p>
  <p>Lucky Number Index: ${luckyIndex}</p>
`;
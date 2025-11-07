// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    { sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Bro T" },
    { sectionNum: 2, roomNum: "STC 347", enrolled: 25, days: "TTh", instructor: "Sis A" },
  ],

  // Activity 3: Combined enroll/drop into ONE method
  changeEnrollment: function (sectionNum, add = true) {
    const index = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );

    if (index >= 0) {
      this.sections[index].enrolled += add ? 1 : -1;
      renderSections(this.sections);
    }
  }
};

// ------ Activity 1 ------
function setCourseInfo(course) {
  document.querySelector("#courseName").textContent = course.name;
  document.querySelector("#courseCode").textContent = course.code;
}

function sectionTemplate(section) {
  return `
    <tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td>
    </tr>`;
}

function renderSections(sections) {
  document.querySelector("#sections").innerHTML =
    sections.map(sectionTemplate).join("");
}

// ------ Activity 2 ------
document.querySelector("#enrollStudent").addEventListener("click", () => {
  const num = document.querySelector("#sectionNumber").value;
  aCourse.changeEnrollment(num, true);
});

document.querySelector("#dropStudent").addEventListener("click", () => {
  const num = document.querySelector("#sectionNumber").value;
  aCourse.changeEnrollment(num, false);
});

// initialize page
setCourseInfo(aCourse);
renderSections(aCourse.sections);
let students = [];

window.onload = () => {
  const setStudents = (number) => {
    students = [];
    for (let i = 0; i < number; i++) students.push(i);
  };

  const peopleInput = document.querySelector("#people");
  const studentsTable = document.querySelector("#students-table");

  peopleInput.addEventListener("input", (e) => {
    const number = Number(e.target.value);
    const isValid = 0 <= number && number <= 1000 ? true : false;

    if (isValid) {
      setStudents(number);
      const shuffledStudents = shuffle(students);

      while (studentsTable.firstChild) {
        studentsTable.removeChild(studentsTable.firstChild);
      }
      for (let i = 0; i < shuffledStudents.length; i++) {
        const elem = document.createElement("div");
        elem.className = "student";
        elem.textContent = shuffledStudents[i];
        studentsTable.append(elem);
      }
    }
  });
};

const shuffle = ([...array]) => {
  const start = performance.now();
  const n = array.length - 1;
  for (var i = n; i >= 0; i = i - 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  const end = performance.now();
  console.log(`${end - start} ms`);
  return array;
};

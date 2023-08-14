// 1. Написать цикл, который создает множество параграфов с каждым
// десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60,
// 50). Добавить созданные параграфы в div с классом numbers.

function paragraph() {
  let numbers = document.querySelector(".numbers");
  for (let i = 100; i >= 50; i = i - 10) {
    let paragraph = document.createElement("p");
    paragraph.innerText = i;
    numbers.appendChild(paragraph);
  }
}
paragraph();

// 2. Написать цикл, который проходится по массиву строк, для каждой
// строки создает параграф и добавляет его в div с классом
// strings_container. Строки взять произвольные.

function stringsArr() {
  const strings = [
    "believed",
    "satisfied",
    "down",
    "point",
    "corn",
    "yet",
    "island",
    "soon",
    "captain",
    "nearly",
    "bread",
    "frozen",
    "noun",
    "fresh",
    "your",
    "top",
    "private",
    "choose",
    "label",
    "setting",
    "made",
    "letter",
    "movement",
    "lion",
  ];
  let stringsContainer = document.querySelector(".stringsContainer");
  for (const string of strings) {
    let paragraph = document.createElement("p");
    paragraph.innerText = string;
    stringsContainer.appendChild(paragraph);
  }
}
stringsArr();

// 3. Написать цикл, который проходится по массиву с объектами - у
// объектов свойства first_name, last_name и age (данные взять
// произвольные) - и создает карточки только для совершеннолетних
// пользователей. Карточка должна содержать информацию об имени,
// фамилии и возрасте пользователя. Добавить все карточки в div с
// классом users_container.

function cards() {
  const cards = [
    {
      first_name: "Austin",
      last_name: "Jensen",
      age: 15,
    },
    {
      first_name: "Antonio",
      last_name: "Cruz",
      age: 64,
    },
    {
      first_name: "Harvey",
      last_name: "McBride",
      age: 21,
    },
    {
      first_name: "Maurice",
      last_name: "Little",
      age: 7,
    },
    {
      first_name: "Lloyd",
      last_name: "Gordon",
      age: 52,
    },
    {
      first_name: "Joshua",
      last_name: "Lambert",
      age: 33,
    },
    {
      first_name: "Luella",
      last_name: "Walker",
      age: 59,
    },
  ];
  let info = document.querySelector(".usersContainer");
  for (const card of cards) {
    if (card.age >= 18) {
      let userInfo = document.createElement("div");
      userInfo.innerHTML = `<h2>${card.first_name} ${card.last_name}</h2>
     <p>${card.age}</p>`;
      info.appendChild(userInfo);
    }
  }
}
cards();

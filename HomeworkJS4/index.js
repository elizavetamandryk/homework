// 1. Создать кнопку "Создать картинку" и пустой div. При клике
// на кнопку в div создается изображение (img). Изображение
// произвольное.

let createImgButton = document.getElementById("createImg");
let container = document.getElementById("imgContainer");
createImgButton.addEventListener("click", function () {
  let img = document.createElement("img");
  img.src =
    "https://www.space-travel.ru/workdir/bgr_country/574c6130b3df61j.jpg";
  img.style.width = "300px";
  container.appendChild(img);
});

// 2. Создать кнопку и пустой div. При клике на кнопку создавать
// внутри div параграф с произвольным текстом.

let createParagraphButton = document.getElementById("createParagraph");
let container2 = document.getElementById("paragraphContainer");
createParagraphButton.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  paragraph.innerText =
    "Japan is a country of striking contrast of beautiful traditional ambiance alongside bustling urban centers. It has something for everyone. Japan is a country located in Northeast Asia not very far from Korea or from China. The city of Fukuoka is only 217 km away from Busan in South Korea and it’s only 876 km away from Shanghai in China. Japan is an island nation and Japanese people will remind you of that at every opportunity by the way.";
  container2.appendChild(paragraph);
});

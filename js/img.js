const imge = document.querySelector("body");
const imgNumber = 3;

function imgChage(img) {
  const image = new Image();
  image.src = `img/${img + 1}.jpg`;
  imge.appendChild(image);
  image.classList.add("img");
}
function random() {
  const number = Math.floor(Math.random() * imgNumber);
  return number;
}

function init() {
  const randomNumber = random();

  imgChage(randomNumber);
}

setInterval(init, 5000);

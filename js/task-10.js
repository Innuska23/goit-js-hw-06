function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

create.addEventListener("click", () => {
  const value = input.value;
  if (!!value) {
    createBoxes(Number(value));
  }
});

destroy.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  let elementList = [];
  const BOX_SIZE = 30;
  const INCREASE_SIZE = 10;

  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement('div');
    element.style.width = `${BOX_SIZE + INCREASE_SIZE * i}px`;
    element.style.height = `${BOX_SIZE + INCREASE_SIZE * i}px`;
    element.style.backgroundColor = getRandomHexColor();
    elementList.push(element);
  }

  boxes.append(...elementList)
};

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
};


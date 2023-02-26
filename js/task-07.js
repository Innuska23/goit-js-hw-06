const sizeInput = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

sizeInput.addEventListener("input", (event) => {
    let changeStyle = event.target.value;
    textEl.style.fontSize = `${changeStyle}px`;
}
);
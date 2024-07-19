const textContainer = document.getElementById('text-container');

const fontSelect = document.getElementById('font-select');
const fontSize = document.getElementById('font-size');
const fontColor = document.getElementById('font-color');
const textInput = document.getElementById('text-input');
const addText = document.getElementById('add-text');

addText.addEventListener('click', () => {
    if(textInput.value) {
        textContainer.textContent = textInput.value;
        textContainer.style.fontFamily = fontSelect.value;
        textContainer.style.fontSize = fontSize.value + 'px';
        textContainer.style.color = fontColor.value;
    } else {
        alert("No text was given");
    }
    textInput.value = '';
});

let offsetX, offsetY;
const move = (e) => {
    const imgHolderRect = document.getElementById('img-holder').getBoundingClientRect();
    
    // Calculate new position
    let newX = e.clientX - imgHolderRect.left - offsetX;
    let newY = e.clientY - imgHolderRect.top - offsetY;

    // Constrain the text within the image holder boundaries
    newX = Math.max(0, Math.min(newX, imgHolderRect.width - textContainer.offsetWidth));
    newY = Math.max(0, Math.min(newY, imgHolderRect.height - textContainer.offsetHeight));

    textContainer.style.left = `${newX}px`;
    textContainer.style.top = `${newY}px`;
};

textContainer.addEventListener("mousedown", (e) => {
    offsetX = e.clientX - textContainer.getBoundingClientRect().left;
    offsetY = e.clientY - textContainer.getBoundingClientRect().top;
    document.addEventListener("mousemove", move);
});

document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", move);
});

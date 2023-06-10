function fillBox(size) {
    let box = document.querySelector(".box-container");
    box.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    box.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < 256; i++) {
        let innerBox = document.createElement('div');
        innerBox.style.backgroundColor = 'blue';
        box.appendChild(innerBox);

        innerBox.addEventListener('mouseover', function () {
            innerBox.style.backgroundColor = 'white';
        });
    }
}

fillBox(16);
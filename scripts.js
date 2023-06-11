const resize = document.getElementById('resize');
const reset = document.getElementById('reset');

resize.addEventListener('click', function(){
    let resizeNumber = prompt('Enter a number between 2 and 100');
    if (resizeNumber < 2 || resizeNumber > 100){
        alert('Enter a number between 2 and 100')
    } else {
        fillBox(resizeNumber);
    }
})

function fillBox(size) {
    let box = document.querySelector(".box-container");
    let innerBoxes = box.querySelectorAll('divs');
    innerBoxes.forEach((div) => div.remove());
    box.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    box.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let innerBox = document.createElement('div');
        innerBox.style.backgroundColor = 'blue';
        box.appendChild(innerBox);

        innerBox.addEventListener('mouseover', function () {
            innerBox.style.backgroundColor = 'white';
        });

        reset.addEventListener('click', function(){
            innerBox.style.backgroundColor = 'blue';
        });
    }
}


fillBox(16);
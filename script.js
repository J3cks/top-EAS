//get number of divs needed
function getNumber(){
    const boxInput = document.getElementById('box-number');
    const boxNumber = parseInt(boxInput.value);
    if (boxNumber > 64) {
        alert('Thats too much pixelssssss I lagggeeedd');
    }
    return boxNumber;
}
//

//
function resetDivsContainer() {
    const divsContainer = document.querySelector('#divs-container');
    divsContainer.innerHTML = '';
}
//

//creates the divs as enter button is clicked
function createDivs(){
    const boxSubmit = document.getElementById('box-submit');
    boxSubmit.addEventListener('click', function(){

    resetDivsContainer();
    getNumber();

    let squaredNums = Math.pow(getNumber(), 2);
    for (d = 0; d < squaredNums; d++){
        const div = document.createElement('div');
        div.className = 'divs'
        const divsContainer = document.querySelector('#divs-container');
        divsContainer.appendChild(div);
    }
    //make css grid div auto resize depending on number of to be generated 
    let calcPx = 600 / getNumber();
    const divsContainer = document.querySelector('#divs-container');
    divsContainer.style.gridTemplateColumns = `repeat(auto-fill, max(${calcPx}px))`;
    divsContainer.style.gridTemplateRows = `repeat(auto-fill, max(${calcPx}px))`;
});
}
//
createDivs();

//gets color
let pickedColor = '';
function getColor(){
    const colorMode = document.getElementById('color-mode');
    colorMode.addEventListener('click', function(){
        const colorPicked = document.getElementById('color-picked').value;
        pickedColor = colorPicked; 
        //console.log(pickedColor);
    })
}
getColor();

//changes the background of divs
function pickColorEtch() {
    const boxSubmit = document.getElementById('box-submit');
    boxSubmit.addEventListener('click', function(){
        const divs = document.querySelectorAll('.divs');
        divs.forEach(div => {
            div.addEventListener('mousemove', function(){
                div.style.backgroundColor = `${pickedColor}`;
            })  
        })
    })
}
pickColorEtch();

//Clear All
function clearAll() {
    const clear = document.getElementById('clear-mode');
    clear.addEventListener('click', resetDivsContainer);
}
clearAll();

function eraser(){
    const erase = document.getElementById('eraser-mode');
    erase.addEventListener('click', function(){
        const divs = document.querySelectorAll('.divs');
        divs.forEach(div => {
            div.addEventListener('mousemove', function(){
                div.style.backgroundColor = '';
            })  
        })
    })
}
eraser();

function changeColor() {
    const rainbow = document.getElementById('rainbow-mode');
    rainbow.addEventListener('click', function(){
        setInterval(function () {
            // Generate random RGB values
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
        
            // Create an RGB color string
            const newColor = `rgb(${red},${green},${blue})`;
            const divs = document.querySelectorAll('.divs');
                divs.forEach(div => {
                div.addEventListener('mousemove', function(){
                div.style.backgroundColor = newColor;
            })  
        })
          }, 100);
    })
  }
changeColor();








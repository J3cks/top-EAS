1//Global variable for easy access of nodes
const divsContainer = document.querySelector('#divs-container'); //container of to be created divs
const boxSubmit = document.getElementById('box-submit'); //"enter" button
const boxInput = document.getElementById('box-number'); //box input for desired pixels
const colorMode = document.getElementById('color-mode'); //"pick color" button
const erase = document.getElementById('eraser-mode'); // "eraser" button
const divs = document.querySelectorAll('.divs'); //nodelist of div created
const clear = document.getElementById('clear-mode'); //"clear all" button
const rainbow = document.getElementById('rainbow-mode'); //"random color" button
//

//Reset the div container by clearing the innerHTML of container
function resetDivsContainer() {
    divsContainer.innerHTML = '';
}

// //creates the divs as enter button is clicked
function createDivs(){
    //resets the div first(in case that there is a previously boxes made)
    resetDivsContainer();

    //get number of divs needed
    function getNumber(){
        const boxInput = document.getElementById('box-number');
        const boxNumber = parseInt(boxInput.value);
        if (boxNumber > 64) {
            alert('Thats too much pixelssssss I lagggeeedd');
            }
        return boxNumber;
    }

    let squaredNums = Math.pow(getNumber(), 2);
    for (d = 0; d < squaredNums; d++){
        const div = document.createElement('div');
        div.className = 'divs'
        const divsContainer = document.querySelector('#divs-container');
        divsContainer.appendChild(div);
    }

    //make css grid div auto resize depending on number of to be generated 
    let calcPx = 600 / getNumber();
    divsContainer.style.gridTemplateColumns = `repeat(auto-fill, max(${calcPx}px))`;
    divsContainer.style.gridTemplateRows = `repeat(auto-fill, max(${calcPx}px))`;
}

//makes sketch using color picked from the color input color picked + button select
let intervalID;
function colorSelectMode(){
    //gets color
    let pickedColor = '';
    colorMode.addEventListener('click', function(){
        const colorPicked = document.getElementById('color-picked').value;
        pickedColor = colorPicked; 
    })

    //background color of div will change upon hover on the div
    colorMode.addEventListener('click', function(){
        const divs = document.querySelectorAll('.divs');
        divs.forEach(function(div) {
            div.addEventListener('mousemove', function(){
                div.style.backgroundColor = `${pickedColor}`;
            })  
        });
        clearInterval(randomRgb);
    })
}

//erase the div background color upon mousemove
function eraser(){
    erase.addEventListener('click', function(){
        const divs = document.querySelectorAll('.divs');
        divs.forEach(function(div) {
            div.addEventListener('mousemove', function(){
                div.style.backgroundColor = '';
            });  
        })
        clearInterval(randomRgb);
    })
};
//

//Clear al and resets the div container
function clearAll() {
    clear.addEventListener('click', resetDivsContainer);
}
//

//create random rgb values and change the div background color upon mousemove
let randomRgb;
function rainbowMode() {
    rainbow.addEventListener('click', function(){
        randomRgb = setInterval(function () {
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
rainbowMode();
//

//Event listeners for menu usage
boxSubmit.addEventListener('click', createDivs);
colorMode.addEventListener('click', colorSelectMode);
erase.addEventListener('click', eraser);
clear.addEventListener('click', clearAll);
//
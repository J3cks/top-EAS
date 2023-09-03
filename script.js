//Reset the div container by clearing the innerHTML of container
function resetDivsContainer() {
    const divsContainer = document.querySelector('#divs-container');
    divsContainer.innerHTML = '';
}
//

//creates the divs as enter button is clicked
function createDivs(){
    const boxSubmit = document.getElementById('box-submit');
    boxSubmit.addEventListener('click', function(){

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
    const divsContainer = document.querySelector('#divs-container');
    divsContainer.style.gridTemplateColumns = `repeat(auto-fill, max(${calcPx}px))`;
    divsContainer.style.gridTemplateRows = `repeat(auto-fill, max(${calcPx}px))`;
});
}
createDivs();

//makes sketch using color picked from the color input
//color picked + button select
let colorcolor;
function colorSelectMode(){
    //gets color
    let pickedColor = '';
    function getColor(){
        const colorMode = document.getElementById('color-mode');
        colorMode.addEventListener('click', function(){
            const colorPicked = document.getElementById('color-picked').value;
            pickedColor = colorPicked; 
        })
    }
    getColor();

    //background color of div will change upon hover on the div
    function pickColorEtch() {
        const boxSubmit = document.getElementById('box-submit');
        boxSubmit.addEventListener('click', function(){
            const divs = document.querySelectorAll('.divs');
            colorcolor = setInterval(function() {
                divs.forEach(function(div) {
                  div.addEventListener('mousemove', function(){
                    div.style.backgroundColor = `${pickedColor}`;
                  })  
                });
              }, 100);
        })
    }
    pickColorEtch();
}
colorSelectMode();


function eraser(){
    const erase = document.getElementById('eraser-mode');
    erase.addEventListener('click', function(){
        const divs = document.querySelectorAll('.divs');
        divs.forEach(div => {
            div.addEventListener('mousemove', function(){
                div.style.backgroundColor = '';
            })  
        })
        clearTimeout(randomRgb);
        clearTimeout(colorcolor);
    })
}
eraser();





//Clear al and resets the div container
function clearAll() {
    const clear = document.getElementById('clear-mode');
    clear.addEventListener('click', resetDivsContainer);
}
clearAll();



let randomRgb;
function rainbowMode() {
    const rainbow = document.getElementById('rainbow-mode');
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

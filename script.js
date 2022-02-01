//Create the object of math to perform operations 
const math = (() => {                  
    const add = (x,y) => x + y;
    const subtract = (x,y) => x - y;
    const divide = (x,y) => x / y;
    const times = (x,y) => x  * y;
    return {
        add,
        subtract,
        divide,
        times
    }
})()


//Get the contents of the display
let getDisplay = () => document.querySelector('.calc-face'); 



let x = null;
let y = null;
let operator = null;



function operate ()  {
    console.log("operated");
    ret = math[operator](x,y);
    x = null;
    y = null;
    operator = null;
    return ret;   
}

const btns = document.querySelectorAll('.btn');

//Set an event listener to get user input and consequently set the display
btns.forEach(btn => {
    btn.addEventListener('click',e => {
        // console.log(e.target.id)
        console.log(isOperator(e.target));
        setDisplay(e.target)
    })
})


function setDisplay (input,display = getDisplay()) {
    if(deleteBtn(input)) {
        display.innerText -= display.innerText[display.innerText.length - 1]
    }
    
    if (isZero(display)) {
        display.innerText = input.innerText
        return
    }
    
    if (isOperator(input)) {
        calcLog(display,input)
    } else {
        display.innerText += input.innerText
    }

}

function calcLog(display,input) {
    //if x is null then that means
    if (!x) {
        x = +display.innerText;
        display.innerText = '0';
        operator = input.id;
    }else {
        y = +display.innerText;
        display.innerText = operate();
    }
}

const isOperator = (input) => {
    const arr = Array.from(input.classList)

    if (arr.includes('operator')) {
        return true
    }
    return false
}

const deleteBtn = (input) =>  input.id === "delete" ? true : false

const isZero = (display) => display.innerText == '0' ? true : false

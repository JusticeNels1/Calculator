function operate (x,y,operator) {

    if (operator == ("plus")) {
       return  x + y
    } 

    if (operator == ("minus")) {
       return  x - y ;
    } 

    if (operator == ("multiply")) {
       return x * y
    }
    
    if (operator == ("divide")){
        return x / y
    }
    
}

const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');
const operands = [];

buttons.forEach(button => {
    button.addEventListener('click',e => {
        const deleted = display.innerText.substring(0,display.innerText.length - 1);

        if(e.target.id == "clear") {
            operands.length = 0;
            return display.innerText = "";
        }
        
        if(e.target.id == "delete") {
            return display.innerText = deleted;
        }
        
        if (e.target.id == "period" && display.innerText.indexOf(".") != -1) {return deleted}
        if (e.target.id == "period") {return display.innerText += "."}
                
        if (e.target.className == "operator") {
            operands.push(Number(display.innerText),e.target.id)
            return display.innerText = "";
        }
        
        let operator = null;
        
        if (e.target.id == "equal") {
            
            operands.push(Number(display.innerText))
            let total  = operands.reduce((total,ele) => {
                console.log(total)
                console.log(ele)
                console.log(" ")
                
                if(typeof(ele) == 'string') {
                    operator = ele;
                }
                if (typeof(ele) == 'number' && operator != null){
                    total = operate(total,ele,operator)
                }
                
                return total;
            },operands[0])
            display.innerText = total;
            operands.length = 0;
            return 
        }
        
       
        display.innerText += (e.target.innerText)
        
    })
})








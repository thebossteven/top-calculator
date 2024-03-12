// set input for the numbers

const screen = document.querySelector(".screen");

const oneButton = document.querySelector(".one");
const twoButton = document.querySelector(".two");
const threeButton = document.querySelector(".three");
const fourButton = document.querySelector(".four");
const fiveButton = document.querySelector(".five");
const sixButton = document.querySelector(".six");
const sevenButton = document.querySelector(".seven");
const eightButton = document.querySelector(".eight");
const nineButton = document.querySelector(".nine");
const zeroButton = document.querySelector(".zero");
const addButton = document.querySelector(".add");
const subtractButton = document.querySelector(".subtract");
const multiplyButton = document.querySelector(".multiply");
const divideButton = document.querySelector(".divide");
const resetButton = document.querySelector(".ac");
const equalsButton = document.querySelector(".equals");

let displayValue = 0;
let numberOne = "";
let numberTwo = "";
let operatorOne = null;
let operatorTwo = null;

function updateDisplay(number){
    displayValue = number;
    screen.textContent = displayValue;

}


addButton.addEventListener("click", function(){
inputOperator("+")
});
subtractButton.addEventListener("click", function(){
    inputOperator("-")
    });
multiplyButton.addEventListener("click", function(){
    inputOperator("*")
 });
divideButton.addEventListener("click", function(){
    inputOperator("/")
    divideButton.computedStyleMap.color = "red";
    });
resetButton.addEventListener("click", function(){
    numberOne = "";
    numberTwo = "";
        updateDisplay(numberOne);
        });

oneButton.addEventListener("click", function(){
    inputNumber("1");
    });
twoButton.addEventListener("click", function(){
    inputNumber("2");
    });
threeButton.addEventListener("click", function(){
    inputNumber("3");
     });
fourButton.addEventListener("click", function(){
    inputNumber("4");
    });
 fiveButton.addEventListener("click", function(){
    inputNumber("5");
    });
 sixButton.addEventListener("click", function(){
    inputNumber("6");
    });
sevenButton.addEventListener("click", function(){
    inputNumber("7");
     });  
 eightButton.addEventListener("click", function(){
    inputNumber("8");
     })  
 nineButton.addEventListener("click", function(){
    inputNumber("9");
    });   
zeroButton.addEventListener("click", function(){
    inputNumber("0");
     });



     equalsButton.addEventListener("click", function(){
        let result = calculate(operatorOne)
        updateDisplay(result);
     })



//have two variables for numbers
//when you press an operation button it chooses that operation
//and switches the display to the second number
//once you input second number it calculates the result

function inputNumber(number){
    if(operatorOne === null){
        numberOne += number;
        updateDisplay(numberOne);
    }else{
        numberTwo += number;
        updateDisplay(numberTwo);
    }

}

function calculate(op){
    if(op === "+"){
        return Number(numberOne) + Number(numberTwo);
    }else if(op === "-"){
        return Number(numberOne) - Number(numberTwo);
    }else if(op === "*"){
        return Number(numberOne) * Number(numberTwo);
    }else if(op === "/"){
        if( numberOne == 0 || numberTwo == 0){
            return "ERROR";
        }
        return Number(numberOne) / Number(numberTwo);
    }
    return Number(numberOne);
};




function inputOperator(operator){
    if(operatorOne === null){
        operatorOne = operator;
        updateDisplay(numberTwo);
    }else{
        if(calculate(operatorOne) === "ERROR"){
            numberOne = "";
        }else{
            numberOne = calculate(operatorOne)
        }
      updateDisplay(numberOne);
      numberTwo = "";
      if(numberOne == ""){
        operatorOne = null
      }else{
      operatorOne = operator;
      }
    }

}
/*
 function computerPlay(){
    const randomNumber = Math.floor(Math.random()* 3)+1;
   
    if(randomNumber == 1){
        return 1;
    }else if(randomNumber == 2){
        return 2;
    }else if(randomNumber == 3){
        return 3;
    }else{
        console.log("Error");
    }
} 
var rock = "rock"; // rock is assinged as the number 1 for computer
var paper = "paper"; // paper is assinged as the numbere 2 for computer
var scissors = "scissors"; // scissors is assinged as the number 3 for computer


function play(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() == rock || paper || scissors){

        switch(computerSelection){
            case 1:
                if(playerSelection.toLowerCase() == paper){
                    console.log("Player1 you win ! **Paper beats Rock**");
                }else if(playerSelection.toLowerCase() == scissors){
                    console.log("Computer you win ! **Rock beats scissors**");
                }else{
                    console.log("Draw!");
                }
                break;
            case 2:
                if(playerSelection.toLowerCase() == scissors){
                    console.log("Player1 you win ! **scissors beats Paper**");
                }else if(playerSelection.toLowerCase() == rock){
                    console.log("Computer you win ! **Paper beats Rock**");
                }else{
                    console.log("Draw!");
                }
                break;
            case 3:
                if(playerSelection.toLowerCase() == rock){
                    console.log("Player1 you win ! **Rock beats Scissors**");
                }else if(playerSelection.toLowerCase() == paper){
                    console.log("Computer you win ! **Scissors beats paper**");
                }else{
                    console.log("Draw!");
                }
                break;                 
        }
    }else{
        console.log("Error check your input again! ");
    }  
}
function game(){

        const playerSelection ;
        const computerSelection = computerPlay();

        var button1 = document.createElement("button1");
        button1.innerHTML = "Rock";
        var body1 = document.getElementByTagName("body1")[0];
        body1.appendChild(button1);
        button1.addEventListener("click", play(playerSelection, computerSelection){
            //console.log("Player1 chose the move, "+playerSelection);
        });

        var button2 = document.createElement("button2");
        button2.innerHTML = "Paper";
        var body2 = document.getElementByTagName("body2")[1];
        body2.appendChild(button2);
        button2.addEventListener("click", play(playerSelection, computerSelection){
            //console.log("Player1 chose the move, "+playerSelection);
        });

        var button3 = document.createElement("button3");
        button2.innerHTML = "Scissors";
        var body2 = document.getElementByTagName("body2")[2];
        body1.appendChild(button1);
        button1.addEventListener("click", play(playerSelection, computerSelection){
            //console.log("Player1 chose the move, "+playerSelection);
        });

        
        //Display what move the computer made from the 
        //random number chosen function (1-3) which corresponds to a move we alinged it.
        
        if (computerSelection == 1){
            console.log("Computer chose the move, rock");
        }else if(computerSelection == 2){
            console.log("Computer chose the move, paper");
        }else{
            console.log("Computer chose the move, scissors");
        }
        
        console.log("-------------------------------");
        console.log(play(playerSelection,computerSelection));
    }
console.log(game());

const x = prompt("enter your first number: ");
const y = prompt("enter your second number ");

const operation = prompt("choose operation you want - enter -"+"\n"+ "(1) for addition" +"\n"+ "(2) for subtraction"+"\n"+ "(3) for multiplication"+"\n"+ "(4) for division");

function operate(x, y, operation){
    //do{
    
        if (operation == 1){
            return addition(x,y);
        }else if(operation == 2){
            return subtraction(x,y);
        }else if(operation == 3){
            return multiplication(x,y);
        }else if(operation == 4){
            return division(x,y);
        }else{
            console.log("Please enter a number from 1-4 !")
            //operation = prompt("choose operation you want - enter - (1) for addition (2) for subtraction (3) for multiplication (4) for division");
        }
    //2}while(operation!=1 || operation!=2 || operation!=3 || operation!=4);
    }

function addition(x, y){
    //addition
    var result = (parseInt(x)+parseInt(y));
    return result;
}


function subtraction(x, y){
    //subtraction
    var result = (x-y);
    return result;
}
function multiplication(x, y){
    //multiplication
    var result = (x*y);
    return result;
}
function division(x, y){
    //division
    var result = (x/y);
    return result;
}

console.log("Result = "+operate(x, y, operation));
*/

// Get the Variable from the input box
function screen(val){
    document.getElementById("box").value=val;
    }

// Concatenating Values
function shownum(val){
    document.getElementById("box").value+=val;
    }

// Performing the Calcuulation
function solve() { 
    try{ 
        screen(eval(document.getElementById("box").value)) 
    } 
    catch(e){
            screen('Error') 
        } 
    }
// Clear the Input Screen
function clearme(){
            document.getElementById("box").value = "";
        } 
// Backspace Function
function delback() {
            var valueNeeded = document.getElementById("box").value;
            var finalValueNeeded = valueNeeded.substr(0, valueNeeded.length-1); 
            document.getElementById("box").value=finalValueNeeded;    
        } 





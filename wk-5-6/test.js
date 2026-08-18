let words = "Hello students this is some words";

console.log(words);

const tableTitle = "Cool Table";

let rowCount = 0;

function ShowRowCount(){
    let findRows = document.querySelectorAll("table tr").length - 1; //Just don't grab the header -1
    rowCount = findRows;
    console.log(rowCount) //This could update on the page for element ID
}

//ShowRowCount(); //lets run a quick test of rows
function GreetTheUser(){
    alert(words);
    //console.log(words);
}

function CheckAge() 
{
    //PROMPT
    //Parse Int > make sure you get a number
    let age = parseInt(prompt("How old are you?"));
    if(age >=18){
        alert("You are old enough to sign up for an account!");
        GreetTheUser();
    }
    else if(age >= 13) {
        alert("You need a parent to sign up for an account!");
        GreetTheUser();
    }
    else {
        alert("Sorry you can not sign up for an account...")
        GreetTheUser();
    }

}
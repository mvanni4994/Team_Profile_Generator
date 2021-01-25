const inquirer = require("inquirer");
const fs = require ('fs')

inquirer.prompt([
    {
        name: "Greeting",
        message:"What would you like to say?",
        type:"input"
    }
])
.then(function(answer){
    console.log(answer);
});
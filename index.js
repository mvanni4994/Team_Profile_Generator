const inquirer = require('inquirer')
const fs = require('fs')

let newTeamProfile = []

function createApp(){
    teamPrompt()
}

var Manager = require("./staffLib/manager.js")
var Engineer = require("./staffLib/engineer.js")
var Intern = require("./staffLib/intern.js")


function managerPrompt(){
    inquirer.prompt([
        {
            type:"input",
            name: "name",
            message:"What is the Manager's name?"
        },
        {
            type:"input",
            name: "ID",
            message:"What is the Manager's employee ID?"
        },
        {
            type:"input",
            name: "email",
            message:"What is the Manager's email address?"
        },
        {
            type:"input",
            name:"officeNumber",
            message:"What is the office number of the manager?"
        },
    ]).then(function(response) {
        var name = response.name;
        var ID = response.ID;
        var email = response.email;
        var officeNumber = response.officeNumber;
        const newMem = new Manager(name, ID, email, officeNumber);
        newTeamProfile.push(newMem);
        teamPrompt();
    })
    }
    
    function internPrompt(){
        inquirer.prompt([
            {
                type:"input",
                name: "name",
                message:"What is the intern's name?"
            },
            {
                type:"input",
                name: "ID",
                message:"What is the intern's employee ID?"
            },
            {
                type:"input",
                name: "email",
                message:"What is the intern's email address?"
            },
            {
                type:"input",
                name:"internSchool",
                message:"What school did the intern attend?"
            },
        ]).then(function(response) {
            var name = response.name;
            var ID = response.ID;
            var email = response.email;
            var internSchool = response.internSchool;
            const newMem = new Intern(name, ID, email, internSchool);
            newTeamProfile.push(newMem);
            teamPrompt();
        })
        }
    
        function engineerPrompt(){
            inquirer.prompt([
                {
                    type:"input",
                    name: "name",
                    message:"What is the engineer's name?"
                },
                {
                    type:"input",
                    name: "ID",
                    message:"What is the engineer's employee ID?"
                },
                {
                    type:"input",
                    name: "email",
                    message:"What is the engineer's email address?"
                },
                {
                    type:"input",
                    name:"engineerGithub",
                    message:"What is the engineer's Github username?"
                },
            ]).then(function(response) {
                var name = response.name;
                var ID = response.ID;
                var email = response.email;
                var engineerGithub = response.engineerGithub;
                const newMem = new Engineer(name, ID, email, engineerGithub);
                newTeamProfile.push(newMem);
                teamPrompt();
            })
            }
    
//             function employeePrompt(){
//                 inquirer.prompt([
//                     {
//                         type:"input",
//                         name: "name",
//                         message:"What is the employee's name?"
//                     },
//                     {
//                         type:"input",
//                         name: "ID",
//                         message:"What is the employee's employee ID?"
//                     },
//                     {
//                         type:"input",
//                         name: "email",
//                         message:"What is the employee's email address?"
//                     },
//     ]).then(function(response){
//         var name = response.name;
//         var ID = response.ID;
//         var email = response.email;
//         var internSchool = response.internSchool
//         const newTeamMem = new Intern(name, ID, email, internSchool);
//         newTeamProfile.push(newTeamMem);
//         teamPrompt();
//     })
// } 
    
    function teamPrompt(){
        inquirer.prompt([
            {
                type: 'list',
                name: 'addMore',
                message: 'Who do you want to add?',
                choices: ['Engineer.', 'Intern.', 'Manager.', 'Complete.']
            },
        ])
        .then(function (response) {

            switch (response.addMore) {
                case "Engineer.":
                    engineerPrompt();
                    break;

                case "Intern.":
                    internPrompt();
                    break;

                case "Manager.":
                    managerPrompt();
                    break;

                case "Complete.":
                    completeTeam();
                    break;
            }
        });
    }

function completeTeam() {
    console.log("Success! Team has been created.")
    
    beginHTML()
    inputHTML();
    endHTML();
}
    
function beginHTML(){
    const data = `
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="wIDth=device-wIDth, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <link rel="stylesheet" href="./dist/style.css">
        <title>My Team</title>
        </head>
        <body>
            <nav class="navbar navbar-dark bg-dark">
                <span class="navbar-brand mb-0 h1 w-100 text-center">My Team</span>
                <p ID="myTeam" class="lead"></p>
            </nav>
            <div class="row">
            `
    fs.writeFile('index.html', data, (error) => {
        error ? console.error(error) : console.log('Success!')
});
}

function inputHTML(){
    let data = ""
    newTeamProfile.forEach(function(employee){
        if (employee.getRole() === "Manager"){
            data +=
            `<div class="card" style="wIDth: 18rem;">
            <div class="card-header" ID="topBar">Manager</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" ID="name">${employee.name}</li>
                    <li class="list-group-item">ID: ${employee.ID}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">Office Number: ${employee.managerNumber}</li>
                </ul>
            </div>`
        } else if (employee.getRole() === "Engineer"){
            data +=
            `<div class="card" style="wIDth: 18rem;">
            <div class="card-header" ID="topBar">Engineer</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" ID="name">${employee.name}</li>
                    <li class="list-group-item">ID: ${employee.ID}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item"><a href="https://github.com/${employee.engineerGithub}">https://github.com/${employee.engineerGithub}</a></li>
                </ul>
            </div>`
        } else {
            data +=
            `<div class="card" style="wIDth: 18rem;">
            <div class="card-header" ID="topBar">Intern</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" ID="name">${employee.name}</li>
                    <li class="list-group-item">ID: ${employee.ID}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">School: ${employee.internSchool}</li>
                </ul>
            </div>`
        }
    })
        
        fs.appendFile("index.html", data, function (error) {
            error ? console.error(error) : console.log('success!')
        })
}

function endHTML(){
    data = 
    `</div>
    </body>
    </html>
        `
    fs.appendFile("index.html", data, function (error) {
        error ? console.error(error) : console.log('success!')
    });
}
createApp();
const inquirer = require("inquirer");
const fs = require ('fs');

let newTeamProfile = []

function createApp(){
    teamPrompt()
};

var intern = require('./StaffLib/intern');
var manager = require('./StaffLib/manager');
var engineer = require('./StaffLib/engineer');
var employee = require('./StaffLib/employ');

function managerPrompt(){
inquirer.prompt([
    {
        type:"input",
        name: "Name",
        message:"What is the Manager's name?"
    },
    {
        type:"input",
        name: "id",
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
    var id = response.id;
    var email = response.email;
    var officeNumber = response.officeNumber;
    const newMem = new Manager(name, id, email, officeNumber);
    newTeamProfile.push(newMem);
    teamPrompt();
})
};

function internPrompt(){
    inquirer.prompt([
        {
            type:"input",
            name: "Name",
            message:"What is the intern's name?"
        },
        {
            type:"input",
            name: "id",
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
        var id = response.id;
        var email = response.email;
        var internSchool = response.internSchool;
        const newMem = new Intern(name, id, email, internSchool);
        newTeamProfile.push(newMem);
        teamPrompt();
    })
    };

    function engineerPrompt(){
        inquirer.prompt([
            {
                type:"input",
                name: "Name",
                message:"What is the engineer's name?"
            },
            {
                type:"input",
                name: "id",
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
            var id = response.id;
            var email = response.email;
            var engineerGithub = response.engineerGithub;
            const newMem = new Engineer(name, id, email, engineerGithub);
            newTeamProfile.push(newMem);
            teamPrompt();
        })
        };

        function employeePrompt(){
            inquirer.prompt([
                {
                    type:"input",
                    name: "Name",
                    message:"What is the employee's name?"
                },
                {
                    type:"input",
                    name: "id",
                    message:"What is the employee's employee ID?"
                },
                {
                    type:"input",
                    name: "email",
                    message:"What is the employee's email address?"
                },
            ]).then(function(response) {
                var name = response.name;
                var id = response.id;
                var email = response.email;
                const newMem = new Manager(name, id, email);
                newTeamProfile.push(newMem);
                teamPrompt();
            })
            };

            function teamPrompt() {
                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'add',
                        message: 'Would you like to add an employee?',
                        choices: ['Engineer.', 'Intern.', 'Manager.', 'Employee.', 'No.']
                    },
                ])
                .then(function(response){
                    switch(response.add){
                        case "Add an Engineer.":
                            engineerPrompt();
                            break;
        
                        case "Add an Intern.":
                            internPrompt();
                            break;
        
                        case "Add a Manager.":
                            managerPrompt();
                            break;
        
                        case "Add an Employee.":
                            employeePrompt();
                            break;    

                        case "No.":
                            completeTeam();
                            break;
                    }
                });
            };

            function completeTeam(){
                console.log("Success!")

                beginHTML();
                inputHTML();
                endHTML();
            }

   
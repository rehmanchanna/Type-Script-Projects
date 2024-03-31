#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\t **Welcome to ARC To-Do List**")
interface ansType{
    menuOpt: string,
    todo: string,
}
let toDos: string[]=[];
let loop: boolean=true;
let answer1: ansType;
let answer2: ansType;
let answer3: ansType;
async function startLoop() {
    while(loop){
        await displayMenuItem();
    }
}
startLoop();
async function displayMenuItem() {
    answer1 = await inquirer.prompt([
        {
            type: "list",
            name: "menuOpt",
            choices: ["Add ToDo Item", "Delete ToDo Item", "Exit ToDo List"],
            message: "Please Select One of the Menu List: "
        }
    ]);
    switch(answer1.menuOpt){
        case "Add ToDo Item": {
            await addTodo();
            break;
        }
        case "Delete ToDo Item": {
            await deleteTodo();
            break;
        }
        default : {
            loop = false;
            console.log("\t **You are Now Exit ARC To-Do List** ");
            break;
        }
    }
    
}
async function addTodo() {
    answer2 = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "Please Insert Any Activity, What do you want to Add Today? "
        }
    ]);
    toDos.push(answer2.todo);
    console.log(toDos);
}
async function deleteTodo(){
    if (toDos.length>0){
        answer3 = await inquirer.prompt([
            {
                type:"list",
                name: "menuOpt",
                choices: toDos,
                message: "If you want to Delete any activity then Please type: "
            }
        ]);
        let i = 0;
        do{
            if (toDos[i]=== answer3.menuOpt){
                toDos.splice(i, 1);
                break;
            }
            i++ ;
        } while(i<toDos.length);
        console.log(toDos);
    }else {
        console.log("Yet, You have not add any Activity, first add any Activity then delete item: ")
    } 
}

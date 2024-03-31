import inquirer from "inquirer";
console.log("\t **Welcome to ARC Todo List**");
let toDos = [];
let loop = true;
let answer1;
let answer2;
let answer3;
async function startLoop() {
    while (loop) {
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
    switch (answer1.menuOpt) {
        case "Add ToDo Item": {
            await addTodo();
            break;
        }
        case "Delete ToDo Item": {
            await deleteTodo();
            break;
        }
        default: {
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
            message: "Please Insert Any String, What do you want to Add Item? "
        }
    ]);
    toDos.push(answer2.todo);
    console.log(toDos);
}
async function deleteTodo() {
    if (toDos.length > 0) {
        answer3 = await inquirer.prompt([
            {
                type: "list",
                name: "menuOpt",
                choices: toDos,
                message: "If you want to Delete Item then Please type Item: "
            }
        ]);
        let i = 0;
        do {
            if (toDos[i] === answer3.menuOpt) {
                toDos.splice(i, 1);
                break;
            }
            i++;
        } while (i < toDos.length);
        console.log(toDos);
    }
    else {
        console.log("Yet, You have not add any item, first add string item then delete item: ");
    }
}

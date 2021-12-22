import { Todolist } from "./models/todolist";

let todoList: Todolist[] = [];

window.onload = function () {
    let sumbitButton: HTMLButtonElement = document.querySelector("#btn");
    sumbitButton.addEventListener("click", getUserInputButton);

    getUserInputEnter();
};

function getUserInputButton() {
    let input: HTMLInputElement = document.getElementById(
        "user-input"
    ) as HTMLInputElement;

    let newTodo: Todolist = new Todolist(input.value, false);
    todoList.push(newTodo);
    input.value = "";

    creatingTodo();
}

function getUserInputEnter() {
    let input: HTMLInputElement = document.getElementById(
        "user-input"
    ) as HTMLInputElement;

    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            getUserInputButton();
        }
    });
}

function creatingTodo(): void {
    let todoJSON: string = JSON.stringify(todoList);
    localStorage.setItem("todo", todoJSON);

    let userInput: HTMLUListElement = document.getElementById(
        "ul"
    ) as HTMLUListElement;

    userInput.innerHTML = "";

    for (let i = 0; i < todoList.length; i++) {
        let todoLi: HTMLLIElement = document.createElement(
            "li"
        ) as HTMLLIElement;

        let finishedButton: HTMLButtonElement = document.createElement(
            "button"
        ) as HTMLButtonElement;

        let removeButton: HTMLButtonElement = document.createElement(
            "button"
        ) as HTMLButtonElement;

        todoLi.innerHTML = todoList[i].name;
        finishedButton.addEventListener("click", () => {
            if (todoList[i].finished == false) {
                todoList[i].finished = true;
                creatingTodo();
            } else {
                todoList[i].finished = false;
                creatingTodo();
            }
        });
        finishedButton.innerHTML = "Klar";
        removeButton.addEventListener("click", () => {
            todoList.splice(i, 1);
            creatingTodo();
        });
        removeButton.innerHTML = "Ta bort";

        userInput.appendChild(todoLi);
        userInput.appendChild(finishedButton);
        userInput.appendChild(removeButton);
        document.body.appendChild(userInput);

        if (todoList[i].finished == true) {
            todoLi.style.textDecoration = "line-through";
            finishedButton.innerHTML = "oklar";
        }
    }
}

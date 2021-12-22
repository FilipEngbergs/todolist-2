import { Todolist } from "./models/todolist";

let todoList: Todolist[] = [];

window.onload = function () {
    let sumbitButton: HTMLButtonElement = document.querySelector("#btn");
    sumbitButton.addEventListener("click", getUserInput);
};

function getUserInput() {
    let input: HTMLInputElement = document.getElementById(
        "user-input"
    ) as HTMLInputElement;

    let newTodo: Todolist = new Todolist(input.value, false);
    todoList.push(newTodo);
    console.log(input.value);
    input.value = "";
}

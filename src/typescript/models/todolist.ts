export class Todolist {
    name: string;
    finished: boolean = false;
    constructor(Name: string, Finished: boolean) {
        this.name = Name;
        this.finished = Finished;
    }
}

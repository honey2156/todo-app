import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Todos';
    todoList: string[]

    constructor() {
        this.todoList = []
    }

    update(todoList:string[]){
        this.todoList = todoList
    }
}

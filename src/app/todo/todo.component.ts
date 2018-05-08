import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    @Input() todos: string[]
    @Output() result = new EventEmitter<any>()

    constructor() { }

    ngOnInit() {
    }

    // add new task to the todo list
    addTodo(item: string) {
        if (!item) {
            alert("Task can't be empty!")
        } else {
            this.todos.push(item)
        }
    }

    // delete task from todo list
    removeTodo(index: number) {
        this.todos = this.todos.filter((todo, i) => (i !== index))
    }

    // update given task
    updateTodo(index: number, updatedTodo: string) {
        this.todos[index] = updatedTodo
    }
}

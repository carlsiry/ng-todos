
import { Component, OnInit } from '@angular/core';
import template from './todosList.html';
import { Tasks } from '../../../../../imports/api/tasks';
import { Observable } from 'rxjs/Observable';
import { Task } from '../../../../../imports/models/collection-object.model';

@Component({
    selector: 'todos-list',
    template,
})
export class TodosListComponent implements OnInit{
    tasks: Observable<Task[]>;
    constructor() {
        this.tasks = Tasks.find({}).zone();
    }
    ngOnInit() {
    }
    addTask(newTask: string) {
        console.log(newTask);
        Tasks.insert({
            text: newTask
        });
    }
}

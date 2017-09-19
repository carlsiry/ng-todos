import { Component, OnInit } from '@angular/core';
import template from './todosList.html';
import { Tasks } from '../../../../../imports/api/tasks';
import { Observable } from 'rxjs/Observable';

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
}

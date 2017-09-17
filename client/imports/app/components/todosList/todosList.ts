import { Component, OnInit } from '@angular/core';
import template from './todosList.html';
import { Tasks } from '../../../../../imports/api/tasks';
import { Meteor } from 'meteor/meteor';

interface Task {
    text: string
}

@Component({
    selector: 'todos-list',
    template,
})
export class TodosListComponent implements OnInit{
    tasks: Task[] = [];
    constructor() {
        this.tasks = Tasks.find({});
    }
    ngOnInit() {
        Meteor.subscribe('tasks');
    }
}

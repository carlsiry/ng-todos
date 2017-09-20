
// 导入用于声明组件的装饰器和生命周期钩子的接口类
import { Component, OnInit } from '@angular/core';
import template from './todosList.html';
// 导入数据模型用于查询数据和更新数据
import { Tasks } from '../../../../../imports/api/tasks';
// 导入可观察者对象类
import { Observable } from 'rxjs/Observable';
// 导入数据模型的文档类型定义类
import { Task } from '../../../../../imports/models/collection-object.model';

@Component({
    selector: 'todos-list',
    template,
})
export class TodosListComponent implements OnInit{
    tasks: Observable<Task[]>; // 组件属性：所有的任务为可观察流
    constructor() {
        this.tasks = Tasks.find({}, {
            sort: {
                createdAt: -1 // 文档按时间从大到小排序
            }
        }).zone(); // 组件实例化时，查询所有的任务
    }
    ngOnInit() {
    }
    // 组件方法：用于增加任务到数据模型文档集中
    addTask(newTask: any) {
        console.log(JSON.stringify(newTask)); // ??? 
        // {"__zone_symbol__keyupfalse":[
            // {"type":"eventTask","state":"running",
            // "source":"HTMLInputElement.addEventListener:keyup",
            // "zone":"<root>","runCount":34}
        // ]}
        Tasks.insert({
            text: newTask.value,
            checked: false,
            createdAt: new Date()
        });
        // 重置表单
        newTask.value = '';
    }
    // 删除任务
    removeTask(task: any) {
        console.log(JSON.stringify(task))
        Tasks.remove(task._id);
    }
    // 设置任务是否完成
    setChecked(task: Task) {
        Tasks.update(task._id, {
            $set: {
                checked: !task.checked
            }
        });
    }
}

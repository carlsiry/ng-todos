
// 导入用于声明组件的装饰器
import { Component } from '@angular/core';
// 导入组件需要的模版
import template from './app.component.html';

@Component({
    selector: 'app-root',  // 声明用于在模版中引用的 组件标签名
    template, // 声明组件模版
})
export class AppComponent { }  // 导出组件，用于在模块中定义和加载引导

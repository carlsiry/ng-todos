
// 导入浏览器支持模块
import { BrowserModule } from '@angular/platform-browser'
// 导入用于定义模块的装饰器
import { NgModule } from '@angular/core';
// 导入 模块表单支持模块 和 响应式表单支持模块
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// 导入 根组件 app 用于组装成模块
import { AppComponent } from './app.component';
// 导入 需要在模块中使用的组件：需要在此处先申明，然后可在模块各个组件模版中引用
import { TodosListComponent } from './components/todosList/todosList';


@NgModule({
    // 组件声明
    declarations: [
        AppComponent,
        TodosListComponent
    ],
    // 导入支持和依赖模块
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    // 声明模块中引导启动的组件
    bootstrap: [ AppComponent ]
})
export class AppModule { } // 到处模块用于编译打包


// 适配多个版本的浏览器
import 'angular2-meteor-polyfills';

// 浏览器平台编译器（动态编译）
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// 是否打开开发模式
import { enableProdMode } from '@angular/core';
// 导入app跟模块
import { AppModule } from './imports/app/app.module';

// 打开开发模式
enableProdMode();
// 在浏览器中启动引导 app 根模块
platformBrowserDynamic().bootstrapModule(AppModule);

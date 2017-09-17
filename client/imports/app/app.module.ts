
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TodosListComponent } from './components/todosList/todosList';


@NgModule({
    declarations: [
        AppComponent,
        TodosListComponent
    ],
    imports: [
        BrowserModule
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

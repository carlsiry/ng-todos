
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodosListComponent } from './components/todosList/todosList';


@NgModule({
    declarations: [
        AppComponent,
        TodosListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

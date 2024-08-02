import { Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';

export const routes: Routes = [
    {
        path: '',
        component: TodosComponent
    },
    {
        path: 'add-todo',
        component: AddTodoComponent
    }
];

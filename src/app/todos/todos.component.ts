import { Component } from '@angular/core';
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { Todo } from '../../models/todo.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemComponent, CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {

  todoList: Todo[] = []

  constructor(private router: Router){
    const localTodoList = localStorage.getItem('todoList')
    console.log(localTodoList)
    if(localTodoList === null){
      this.todoList = []
    } else {
      this.todoList = JSON.parse(localTodoList)
    }
  }


  navigateToAddTodo() {
    this.router.navigateByUrl('add-todo')
  }


  deleteTodo(todo: Todo){
    const index = this.todoList.indexOf(todo)
    console.log(index)
    if(index > -1){
      this.todoList.splice(index, 1)
      console.log(this.todoList)
      localStorage.setItem('todoList', JSON.stringify(this.todoList))
    }
  }

}

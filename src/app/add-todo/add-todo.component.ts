import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'
})
export class AddTodoComponent {

  constructor(private location: Location){

  }

  data = {
    title: '',
    description: ''
  }

  addNewTodo(){
    const localTodoList = localStorage.getItem('todoList')
    console.log(localTodoList)
    let todoList = localTodoList === null ? [] : JSON.parse(localTodoList)
    todoList.push(new Todo(this.data.title, this.data.description, true))
    localStorage.setItem('todoList',JSON.stringify(todoList))
    this.location.back()
  }

}

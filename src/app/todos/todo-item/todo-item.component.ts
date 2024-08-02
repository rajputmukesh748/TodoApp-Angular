import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {

  @Input() todo?: Todo
  @Output() deleteTodoEvent : EventEmitter<Todo> = new EventEmitter()


  deleteTodoClick(){
    this.deleteTodoEvent.emit(this.todo)
  }


}

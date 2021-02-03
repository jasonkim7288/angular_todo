import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() paramTodo: Todo = new Todo();
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  // set dynamic classes
  setClasses() {
    let classes = {
      'is-complete': this.paramTodo.completed,
      'text-wrap': true
    };

    return classes;
  }

  onToggle(paramTodo: Todo) {
    // toggle in UI
    paramTodo.completed = !paramTodo.completed;
    // toggle on server
    this.todoService.toggleCompleted(paramTodo).subscribe(todo => {
      console.log(todo);
    });
  }

  onDelete(paramTodo: Todo) {
    this.deleteTodo.emit(paramTodo);
  }
}

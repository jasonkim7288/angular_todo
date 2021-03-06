import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos:Todo[] = [];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo:Todo):void {
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo):void {
    this.todoService.addTodo(todo).subscribe(todo => {
      todo.id = this.getUniqueId();
      this.todos.unshift(todo);
    });
  }

  getUniqueId():number {
    const retVal:number =  this.todos.reduce((acc, todo) => (acc <= todo.id) ? (todo.id + 1) : acc, 0);
    return retVal;
  }
}

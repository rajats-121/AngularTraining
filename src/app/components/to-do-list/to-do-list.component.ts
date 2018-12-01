import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../models/todo';
import { Statistics } from '../../models/statistics';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todos: ToDo[];
  statistics: Statistics;

  constructor(private todoService: TodoService,) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => this.todos = res.json(), err => console.log(err));
    this.statistics = this.todoService.getStats();
  }

  increasePrio(todo: ToDo): void {
    this.todoService.increasePrio(todo).subscribe();
  }

  decreasePrio(todo: ToDo): void {
    this.todoService.decreasePrio(todo).subscribe();
  }

  toggleStatus(todo: ToDo): void {
    if (todo.done === true) {
      todo.done = false;
      this.statistics.undone++;
      this.statistics.done--;
      this.statistics.total = this.statistics.done + this.statistics.undone;
    }
    else if (todo.done === false) {
      todo.done = true;
      this.statistics.done++;
      this.statistics.undone--;
      this.statistics.total = this.statistics.done + this.statistics.undone;
    }
  }

  addTask(todo: ToDo) {
    this.todoService
      .addTask(todo)
      .subscribe(res => this.todos.push(res.json()));
    this.statistics = this.todoService.getStats();
  }
}

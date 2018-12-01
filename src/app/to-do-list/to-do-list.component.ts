import { Component, OnInit } from '@angular/core';
import { ToDo } from '../models/todo';
import { Statistics } from '../models/statistics';

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todos : ToDo [];
  statistics : Statistics;

  constructor() { }

  ngOnInit() {
    this.todos = [
      new ToDo(
        'Bring Milk',
        '1',
        false
      ),
      new ToDo(
        'Study',
        '4',
        false
      ),
      new ToDo(
        'Meet friends',
        '2',
        false
      ),
      new ToDo(
        'Sleep',
        '4',
        false
      ),
    ];
    let stats = new Statistics();
    this.todos.forEach((todo)=>{
        stats.total++; 
        if(todo.done) 
        stats.done++;
        else
        stats.undone++});
    this.statistics = stats;
  }

  increasePrio(todo: ToDo): void {
    if (todo.priority<5)
    todo.priority++;
  }

  decreasePrio(todo: ToDo): void {
    if (todo.priority>1)
    todo.priority--;
  }

  toggleStatus(todo): void {
    if(todo.done === true) {
      todo.done = false;
      this.statistics.undone++;
      this.statistics.done--;
      this.statistics.total = this.statistics.done + this.statistics.undone;
    }
    else if(todo.done === false) {
      todo.done = true;
      this.statistics.done++;
      this.statistics.undone--;
      this.statistics.total = this.statistics.done + this.statistics.undone;
    }
  }
}

import { Injectable } from '@angular/core';
import { ToDo } from '../models/todo';
import { Statistics } from '../models/statistics';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: ToDo[];
  constructor() {
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
  }

  getTodos(): ToDo[] {
    return this.todos;
  }

  increasePrio(todo: ToDo): void {
    if (todo.priority < 5)
      todo.priority++;
  }

  decreasePrio(todo: ToDo): void {
    if (todo.priority > 1)
      todo.priority--;
  }

  addTask(todo: ToDo) {
    this.todos.unshift(todo);
  }

  getStats(): Statistics {
    let stats = new Statistics();
    this.todos.forEach((todo) => {
      stats.total++;
      if (todo.done)
        stats.done++;
      else
        stats.undone++;
    });
    return stats;
  }
}

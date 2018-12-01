import { Injectable } from '@angular/core';
import { ToDo } from '../models/todo';
import { Statistics } from '../models/statistics';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: ToDo[] = [];
  private url = 'http://localhost:3000/todos';

  constructor(private http: Http) {}

  getTodos() {
    return this.http.get(this.url);
  }

  increasePrio(todo: ToDo) {
    if (todo.priority < 5) {
      todo.priority++;
      return this.http.put(this.url + '/' + todo.id, todo);
    }
  }

  decreasePrio(todo: ToDo) {
    if (todo.priority > 1) {
      todo.priority--;
      return this.http.put(this.url + '/' + todo.id, todo);
    }
  }

  addTask(todo: ToDo) {
    return this.http.post(this.url, todo);
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

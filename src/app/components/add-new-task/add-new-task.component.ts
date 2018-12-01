import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToDo } from 'src/app/models/todo';

@Component({
  selector: 'add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.css']
})
export class AddNewTaskComponent implements OnInit {
  @Output() saveBtnClick = new EventEmitter();
  newTodo:ToDo;
  constructor() { }

  ngOnInit() {
    this.newTodo = new ToDo(null,null,false);
  }

  handleSaveBtnClick() {
    this.newTodo.priority = +this.newTodo.priority;
    this.saveBtnClick.emit(this.newTodo);
    this.newTodo = new ToDo(null,null,false);
  }
}

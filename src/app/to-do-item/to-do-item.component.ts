import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../models/ToDo';

@Component({
  selector: 'to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input() todo: ToDo;
  @Output() onPrioUp = new EventEmitter();
  @Output() onPrioDown = new EventEmitter();
  @Output() onToggleStatus = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onPrioUpBtnClick() {
    this.onPrioUp.emit();
  }

  onPrioDownBtnClick() {
    this.onPrioDown.emit();
  }
  
  onToggleStatsBtnClick() {
    this.onToggleStatus.emit();
  }
}

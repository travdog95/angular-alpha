import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type Task } from './task.model';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onComplete() {
    console.log('onComplete: ', this.task.id);
    this.complete.emit(this.task.id);
  }
}

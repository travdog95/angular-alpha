import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task';
import { DUMMY_TASKS } from '../dummy-tasks';

interface Task {
  id: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  tasks = DUMMY_TASKS;

  get userTasks() {
    return this.tasks.filter((t) => t.userId === this.userId);
  }
}

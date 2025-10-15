import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTask } from './new-task/new-task';
import { NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;
  tasks = DUMMY_TASKS;

  get userTasks() {
    return this.tasks.filter((t) => t.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    console.log('Task completed', id);
  }

  onStartAddTask() {
    console.log('Add new task');
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    console.log('Cancel adding task');
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    console.log('Task added', taskData);
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });

    // Close the new task form
    this.isAddingTask = false;
  }
}

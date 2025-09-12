import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TaskList } from './components/task-list/task-list';
import { Task } from './models/task.model';
import { TaskForm } from './components/task-form/task-form';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, MatIconModule, TaskList, TaskForm],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('taskflow');

  tasks: Task[] = [];

  addTask(task: Task) {
    this.tasks.push(task);
  }
}

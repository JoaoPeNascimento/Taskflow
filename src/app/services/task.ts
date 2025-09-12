import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private storageKey = 'tasks';

  // Buscar tarefas do localStorage
  getTasks(): Task[] {
    const tasks = localStorage.getItem(this.storageKey);
    return tasks ? JSON.parse(tasks) : [];
  }

  // Salvar lista inteira
  saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  deleteTask(id: number): Task[] {
    const tasks = this.getTasks().filter((task) => task.id !== id);
    this.saveTasks(tasks);
    return tasks;
  }

  toggleTask(id: number): Task[] {
    const tasks = this.getTasks().map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.saveTasks(tasks);
    return tasks;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskItem } from '../task-item/task-item';
import { TaskService } from '../../services/task';
import { TaskForm } from '../task-form/task-form';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [TaskItem, TaskForm, CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks(); // Carregar do localStorage
  }

  addTask(task: Task): void {
    this.tasks.push(task);
    this.taskService.saveTasks(this.tasks); // Salvar no localStorage
  }

  deleteTask(id: number): void {
    this.tasks = this.taskService.deleteTask(id);
  }

  toggleTask(id: number): void {
    this.tasks = this.taskService.toggleTask(id);
  }
}

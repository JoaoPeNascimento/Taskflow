import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './task-item.html',
  styleUrl: './task-item.scss',
})
export class TaskItem {
  @Input() task!: Task;
  @Output() delete = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();
}

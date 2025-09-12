import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule, MatFormField, MatInputModule, MatButtonModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss',
})
export class TaskForm {
  @Output() taskAdded = new EventEmitter<Task>();
  taskForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const newTask: Task = {
        id: Date.now(),
        title: this.taskForm.value.title!,
        description: this.taskForm.value.description || '',
        completed: false,
      };
      this.taskAdded.emit(newTask);
      this.taskForm.reset();
    }
  }
}

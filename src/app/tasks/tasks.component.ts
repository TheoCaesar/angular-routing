import { Component, inject, input, computed } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent {
  userId = input.required<string>()
  private taskService = inject(TasksService)
  userTasks = computed(()=>this.taskService.allTasks()
    .filter(task => task.userId == this.userId()));
  ngOnInit() {

    console.log("hello", this.userTasks)
  }
}

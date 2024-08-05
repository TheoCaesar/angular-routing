import { Component, inject, input, computed, signal, DestroyRef } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent {
  userId = input.required<string>()
  // orderBy = input<'asc'|'desc'>();
  orderBy = signal<'asc'|'desc'|undefined>(undefined);
  sortParam: Params|null|undefined = {orderBy: this.orderBy() === 'asc' ? 'desc' : 'asc'};
  private taskService = inject(TasksService)
  private activatedRoute = inject(ActivatedRoute)
  private destroyRef = inject(DestroyRef)
  
  userTasks = computed(()=>this.taskService.allTasks()
    .filter(task => task.userId == this.userId())
    .sort((a, b)=>{
      if (this.orderBy() == 'asc') {
        return a.id > b.id ? -1 : 1;
      }
      else return a.id > b.id ? 1 : -1;
    })
  );
  
    ngOnInit() {
    const queryParamsSubscr = this.activatedRoute.queryParams.subscribe((params)=>{
      this.orderBy.set(params['orderBy']);
    })
    this.destroyRef.onDestroy(()=>queryParamsSubscr.unsubscribe());
    console.log("hello", this.orderBy())
  }
}

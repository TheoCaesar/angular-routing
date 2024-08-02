import { Component, inject, input, computed } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  userId = input.required<string>();
  userService = inject(UsersService);

  // userName = computed(()=>this.userService.users.find(
  // (user)=>user.id == this.userId())?.name)
  user = computed(()=>this.userService.users.find(
    (user)=>user.id == this.userId()))
}

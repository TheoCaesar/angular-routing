import { Component, inject, input, computed } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports:[RouterOutlet, RouterLink]
})
export class UserTasksComponent {
  varUserName = input.required<string>();
  activatedRoute = inject(ActivatedRoute);
  message = input.required<string>();

  ngOnInit() {
    this.activatedRoute.data.subscribe({
      next:(data)=>console.log(data)
    })
  }
}

export const resolverUserNameFunction: ResolveFn<string> = (
  (activatedRouteSnapshot: ActivatedRouteSnapshot, 
    routerStateSnapshot: RouterStateSnapshot
  )=> {
    const userService = inject(UsersService);
    const userName = userService.users.find(
      (user)=> user.id === activatedRouteSnapshot.paramMap.get('userId'))?.name || ''
    return userName
})

export const resolveSelectedUserTitle: ResolveFn<string> = (
  (activatedRouteSnapshot, routerStateSnapshot
  )=> {
  return  resolverUserNameFunction(
      activatedRouteSnapshot,routerStateSnapshot
    ) +"'s tasks"
})
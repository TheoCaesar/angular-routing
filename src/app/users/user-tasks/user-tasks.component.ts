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
  // userId = input.required<string>();
  // userService = inject(UsersService);
  // userParam:any;
  // activatedRoute = inject(ActivatedRoute);

  // user = computed(()=>this.userService.users.find((user)=>user.id == this.userId()))
  // //with component input binding
  // message = input.required<string>();

  // ngOnInit() {
  //   console.log('msg', this.message());    
  //   const userId = this.activatedRoute.snapshot.paramMap.get('userId');
  //   console.log('user id',userId)
  //   this.activatedRoute.paramMap.subscribe({
  //     next:(paramMapObj)=>
  //       this.userParam = this.userService.users.find((user)=>user.id === paramMapObj.get('userId'))
  //   })
  // }
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
import { CanMatch, CanMatchFn, RedirectCommand, Route, Router } from "@angular/router";
import { TaskComponent } from "./tasks/task/task.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolverUserNameFunction, resolveSelectedUserTitle, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { TasksComponent } from "./tasks/tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { userRoutes } from "./users/user.routes";
import { inject } from "@angular/core";

const dummyCanMatch: CanMatchFn = (route,segments)=>{
    const router = inject(Router)
    const getAccess = Math.random();
    // return (getAccess > 0.5) ? true : false
    return (getAccess > 0.5) ? true : new RedirectCommand(
        router.parseUrl('/unauthorized')
    );
}
export const routes:Route[] = [
    {
        path: '',
        component:NoTaskComponent,
        title: "No User Selected"
    },
    {   //<web-domain>/users/<uid>
        path:'user/:userId',         
        component: UserTasksComponent,
        children:userRoutes,
        canMatch:[dummyCanMatch],
        data: {
            message: 'hello...'
        }, 
        resolve:{
            varUserName: resolverUserNameFunction
        },
        title: resolveSelectedUserTitle
    },
    {
        path:'**',
        component: NotFoundComponent
    }
]

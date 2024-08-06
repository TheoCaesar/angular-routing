import { Route } from "@angular/router";
import { TaskComponent } from "./tasks/task/task.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolverUserNameFunction, resolveSelectedUserTitle, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { TasksComponent } from "./tasks/tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { userRoutes } from "./users/user.routes";

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

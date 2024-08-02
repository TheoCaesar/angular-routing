import { Route } from "@angular/router";
import { TaskComponent } from "./tasks/task/task.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";

export const routes:Route[] = [
    {
        path: '',
        component:NoTaskComponent
    },
    {   //<web-domain>/users/<uid>
        path:'user/:userId',         
        component: UserTasksComponent
    },
    {
        path:'tasks',          //<web-domain>/tasks
        component: TaskComponent
    }
]
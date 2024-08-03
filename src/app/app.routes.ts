import { Route } from "@angular/router";
import { TaskComponent } from "./tasks/task/task.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { TasksComponent } from "./tasks/tasks.component";

export const routes:Route[] = [
    {
        path: '',
        component:NoTaskComponent
    },
    {   //<web-domain>/users/<uid>
        path:'user/:userId',         
        component: UserTasksComponent,
        children:[
            {
                path:'',  
                redirectTo:'tasks', //to tasks path
                pathMatch: 'full'
            }, 
            {
                path:'tasks',
                component: TasksComponent
            }, 
            {
                path:'tasks/new', 
                component: NewTaskComponent
            }
        ]
    },
    
]
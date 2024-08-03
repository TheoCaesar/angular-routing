import { Route } from "@angular/router";
import { TasksComponent } from "../tasks/tasks.component";
import { NewTaskComponent } from "../tasks/new-task/new-task.component";

export const userRoutes:Route[] = [
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
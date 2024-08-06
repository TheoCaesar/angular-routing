import { Route } from "@angular/router";
import { resolveUserTasks, TasksComponent } from "../tasks/tasks.component";
import { canLeaveEditPage, NewTaskComponent } from "../tasks/new-task/new-task.component";

export const userRoutes:Route[] = [
    {
        path:'',  
        redirectTo:'tasks', //to tasks path
        pathMatch: 'full'
    }, 
    {
        path:'tasks',
        component: TasksComponent,
        // runGuardsAndResolvers:'paramsOrQueryParamsChange' ,
        runGuardsAndResolvers:'always' ,
        resolve:  {
            varUserTasks: resolveUserTasks
        }
    }, 
    {
        path:'tasks/new', 
        component: NewTaskComponent,
        canDeactivate: [canLeaveEditPage]
    }
]
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskModule } from './task/task.module';

const routes: Routes = [
  { path: 'task', loadChildren: () => import('./task/task.module').then(m => m.TaskModule) },
  { path: 'note', loadChildren:()=> import('./note/note.module').then(m=>m.NoteModule) } 
  // {path:'auth', component: AuthComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileListComponent } from './components/file-list/file-list.component'
import { FileFormComponent } from './components/file-form/file-form.component'
import { FilePreviewComponent } from './components/file-preview/file-preview.component'

const routes: Routes = [
  {
    path: 'files',
    component: FileListComponent 
  },
  {
    path: 'files/new',
    component: FileFormComponent
  },
  {
    path: 'files/:id',
    component: FilePreviewComponent
  },
  {
    path: '',
    redirectTo: '/files',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

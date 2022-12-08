import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './groups/pages/groups.component';
import {PaintingsComponent} from './paintings/pages/paintings/paintings.component';

const routes: Routes = [
  {
    path: '',
    component: PaintingsComponent
  },
  {
    path: 'groups/:id',
    component: GroupsComponent
  },
  {
    path: '**',
    redirectTo: 'PaintingsComponent'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

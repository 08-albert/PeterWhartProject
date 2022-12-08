import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexModule } from '@angular/flex-layout';
import { GroupsComponent } from './pages/groups.component';
import { PaintingModule } from '../paintings/painting.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    GroupsComponent,
  ],
  imports: [CommonModule, MaterialModule, FlexModule, PaintingModule, SharedModule],


})
export class GroupsModule { }

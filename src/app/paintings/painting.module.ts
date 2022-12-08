import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { PaintingsComponent } from './pages/paintings/paintings.component';
import { PaintingCardComponent } from './painting-card/painting-card.component';
import { PaintingListComponent } from './painting-list/painting-list.component';
import { SizeNaming } from './pipes/size-naming';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    PaintingListComponent,
    PaintingCardComponent,
    PaintingsComponent,
    SizeNaming,
  ],
  exports: [PaintingListComponent],
  imports: [CommonModule, MaterialModule, FlexModule, SharedModule],
})
export class PaintingModule {}

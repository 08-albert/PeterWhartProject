import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NoItemsFoundComponent} from './no-items-found/no-items-found.component';
import {FiltersComponent} from './filters/filters.component';
import {MaterialModule} from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';



@NgModule({
  declarations: [NoItemsFoundComponent, FiltersComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule
  ],
  exports: [NoItemsFoundComponent, FiltersComponent]
})
export class SharedModule { }

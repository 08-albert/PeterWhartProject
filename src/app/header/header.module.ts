import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LogoComponent } from './logo/logo.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuDropdownComponent } from './menu/menu-dropdown/menu-dropdown.component';



@NgModule({
  declarations: [
    MenuDropdownComponent,
    MenuComponent,
    LogoComponent,
    LanguageSelectorComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    FontAwesomeModule,
    MatMenuModule,
    MatToolbarModule
  ],
  exports: [
    MenuComponent,
    LogoComponent,
    LanguageSelectorComponent,
    FontAwesomeModule,
    MatToolbarModule,
    MenuDropdownComponent
  ]
})
export class HeaderModule { }

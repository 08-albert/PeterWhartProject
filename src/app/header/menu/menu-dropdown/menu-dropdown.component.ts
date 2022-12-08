import {Component, Input, ViewEncapsulation} from '@angular/core';
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-menu-dropdown',
  templateUrl: './menu-dropdown.component.html',
  styleUrls: ['./menu-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuDropdownComponent {
  faChevronDown = faChevronDown;
  @Input() dropDownId!: string;
  @Input() dropDownName!: string;
  @Input() dropDownMenuItems!: Map<string, string>;




  openNewTab( url:string) {
  console.log(url);
    window.open(url, '_self');
  }
}

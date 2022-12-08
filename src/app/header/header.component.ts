import { Component, OnInit,   } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('hamburguerX', [
      /*
        state hamburguer => is the regular 3 lines style.
        states topX, hide, and bottomX => used to style the X element
      */
      state('hamburguer', style({})),
      // style top bar to create the X
      state(
        'topX',
        style({
          transform: 'rotate(45deg)',
          transformOrigin: 'left',
          margin: '6px',
        })
      ),
      // hides element when create the X (used in the middle bar)
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      // style bottom bar to create the X
      state(
        'bottomX',
        style({
          transform: 'rotate(-45deg)',
          transformOrigin: 'left',
          margin: '6px',
        })
      ),
      transition('* => *', [
        animate('0.2s'), // controls animation speed
      ]),
    ]),
  ],
})

export class HeaderComponent implements OnInit {

  isDisabled: boolean = false;
  panelOpenState = false;
  faChevronDown = faChevronDown;
  btnStyle = 'btn-default;'

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleMenu() {
    if (this.isDisabled === true) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  isHamburguer = true;

  onClick() {
    this.isHamburguer = !this.isHamburguer;

    if (this.btnStyle == 'btn-active') {
      this.btnStyle = 'btn-default';
    } else {
      this.btnStyle = 'btn-active';
    }
  }
}

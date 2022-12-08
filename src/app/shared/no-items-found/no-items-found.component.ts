import { Component } from '@angular/core';

@Component({
  selector: 'app-no-items-found',
  templateUrl: './no-items-found.component.html',
  styleUrls: ['./no-items-found.component.scss']
})
export class NoItemsFoundComponent {
  title = 'No paintings were found.';
  subTitle = 'Please try again with new search criteria.';
}

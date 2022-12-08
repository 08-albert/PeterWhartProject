import {Component} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  artistDropDownId = 'menu';
  artistDropDownName = "THE ARTIST";
  artistDropDownMenuItems = new Map<string, string>([
    ["BLOG", "https://peterwhart.com/blog/"],
  ]);


  galleryDropDownId = 'menu2';
  galleryDropDownName = "THE GALLERY";
  galleryDropDownMenuItems = new Map<string, string>([
    ["TESTIMONIALS", "https://peterwhart.com/customer-and-collector-testimonials/"],
    ["EVENTS & NEWS", "https://peterwhart.com/events-news/"],
    ["THE STUDIO", "https://peterwhart.com/the-studio/"],
  ]);


  openNewTab( url:string) {
    console.log(url);
    window.open(url, '_self');
  }



}

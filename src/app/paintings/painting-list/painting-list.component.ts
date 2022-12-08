import {Component, HostListener, Input, OnInit} from '@angular/core';
import {IAlbum, Lightbox, LIGHTBOX_EVENT, LightboxConfig, LightboxEvent} from 'ngx-lightbox';
import {Subscription} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Painting} from '../model/painting.model';


@Component({
  selector: 'app-paintings-list',
  templateUrl: './painting-list.component.html',
  styleUrls: ['./painting-list.component.scss'],
})
export class PaintingListComponent implements OnInit {
  @Input() paintings!: Painting[];
  public getScreenWidth: any;
  public _albums: Array<IAlbum> = [];
  public openCallback!: Function;
  private _subscription?: Subscription;

  constructor(private _lightbox: Lightbox, private _lightboxEvent: LightboxEvent,
              private _lighboxConfig: LightboxConfig) {
    this._lighboxConfig.alwaysShowNavOnTouchDevices = true;
    this._lighboxConfig.disableKeyboardNav = true;
    this._lighboxConfig.showImageNumberLabel = true;
    this._lighboxConfig.showZoom = true;
  }

  ngOnInit(): void {
    this.getScreenWidth = this.calculateGridCols(window.innerWidth);
    for (let i = 0; i < this.paintings.length; i++) {
      const id = this.paintings[i].id;
      const src = `${environment.imgUrl}/${environment.highResolution}/${id}${environment.fileType}`;
      const caption = id;
      const thumb = `${environment.imgUrl}/${environment.defaultResolution}/${id}${environment.fileType}`;
      const album = {
        src: src,
        caption: caption,
        thumb: thumb
      };
      this._albums.push(album);
    }
    this.openCallback = this.open.bind(this);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(): void {
    this.getScreenWidth = this.calculateGridCols(window.innerWidth);
  }

  calculateGridCols(size: number): number {
    return Math.max(1, Math.floor(size / environment.defaultCardWidth));
  }

  open(index: string): void {
    this._subscription = this._lightboxEvent.lightboxEvent$
      .subscribe(event => this._onReceivedEvent(event));
    const indexOfImage = this.paintings.findIndex((val) => val.id == index);
    this._lightbox.open(this._albums, indexOfImage,);
  }

  private _onReceivedEvent(event: any): void {
    // remember to unsubscribe the event when lightbox is closed
    if (event.id === LIGHTBOX_EVENT.CLOSE) {
      // event CLOSED is fired
      this._subscription!.unsubscribe();
    }

    if (event.id === LIGHTBOX_EVENT.OPEN) {
      // event OPEN is fired
    }

    if (event.id === LIGHTBOX_EVENT.CHANGE_PAGE) {
      // event change page is fired
    }
  }

}

import { Component, HostListener, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PaintingSize } from '../model/painting.model';

@Component({
  selector: 'app-painting',
  templateUrl: './painting-card.component.html',
  styleUrls: ['./painting-card.component.scss'],
})
export class PaintingCardComponent implements OnInit {
  @Input() id!: string;
  @Input() image!: string;
  @Input() titleEN!: string;
  @Input() titleFR!: string;
  @Input() featuresEN!: string;
  @Input() featuresFR!: string;
  @Input() year!: number;
  @Input() price!: number;
  @Input() size!: PaintingSize;
  @Input() height!: number;
  @Input() width!: number;
  @Input() categoryEN!: string;
  @Input() collectionEN!: string;
  @Input()
  public openCallback!: Function;
  cardExpanded: boolean;
  public cardWidth: any;


  constructor() {
    this.cardExpanded = false;
  }

  openDialog() {
    this.openCallback(this.id);
   }

  ngOnInit(): void {
    this.cardWidth = this.calculateCardWidth();
    this.image = `${environment.imgUrl}/${environment.defaultResolution}/${this.id}${environment.fileType}`;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(): void {
    this.cardWidth = this.calculateCardWidth();
  }

  calculateCardWidth(): number
  {
    if(window.innerWidth < environment.defaultCardWidth)
    {
      return (window.innerWidth* .75);
    }
    else
    {
      return environment.defaultCardWidth  * .85;
    }
  }
}

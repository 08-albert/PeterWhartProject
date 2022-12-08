import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Painting } from '../../model/painting.model';
import { PaintingService } from '../../painting.service';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.scss'],
})
export class PaintingsComponent implements OnInit {
  $paintings!: Observable<Painting[]>;

  constructor(private paintingsService: PaintingService) {}

  ngOnInit(): void {
    this.getPaintings({
      sortBy: 'product_id',
      sortType: 'DESC',
    });
  }

  getPaintings(paramsObject?: any) {
    this.paintingsService.getPaintings(paramsObject);
    this.$paintings = this.paintingsService.paintings;
  }

  onFilterChange(event: any) {
    this.getPaintings(event);
  }
}

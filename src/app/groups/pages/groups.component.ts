import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from 'rxjs';
import {Painting} from 'src/app/paintings/model/painting.model';
import {GroupsService} from '../groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  $groupedPaintings!: Observable<Painting[]>;

  constructor(private activatedRoute: ActivatedRoute,
              private groupsService: GroupsService) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getGroupedPaintingsById(id);
  }

  getGroupedPaintingsById(id: any): void {
    this.$groupedPaintings = this.groupsService.getGroupedPaintingsById(id);
  }

  onFilterChange(event: any) {
    this.getGroupedPaintingsById(event);
  }
}

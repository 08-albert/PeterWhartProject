import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';
import { FilterObject } from './model/filter.model';
import { SortObject } from './model/sort.model';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  @ViewChild(MatExpansionPanel) matExpansionPanelElement!: MatExpansionPanel;
  @Output() filterChange: EventEmitter<any> = new EventEmitter<any>();
  filtersForm: FormGroup;

  sortByObjectsList = new Map<string, object>([
    ['price_asc', new SortObject('price_cad', 'ASC')],
    ['price_desc', new SortObject('price_cad', 'DESC')],
    ['year_asc', new SortObject('product_year', 'ASC')],
    ['year_desc', new SortObject('product_year', 'DESC')],
    ['id_desc' , new SortObject('product_id','DESC')],
  ]);

  sortByItems: any[] = [
    {
      value: 'price_asc',
      displayName: 'Price: Low to High',
    },
    {
      value: 'price_desc',
      displayName: 'Price: High to Low',
    },
    {
      value: 'year_desc',
      displayName: 'Year: Newest to Oldest',
    },
    {
      value: 'year_asc',
      displayName: 'Year: Oldest to Newest',
    },
  ];

  categories: any[] = [
    { value: 'Abstract', displayName: 'Abstract', checked: false },
    { value: 'Figurative', displayName: 'Figurative', checked: false },
    {
      value: 'Abstract Figurative',
      displayName: 'Abstract Figurative',
      checked: false,
    },
  ];
  sizes: any[] = [
    { value: 'S', displayName: 'Small', checked: false },
    { value: 'M', displayName: 'Medium', checked: false },
    { value: 'L', displayName: 'Large', checked: false },
    { value: 'X', displayName: 'X-Large', checked: false },
  ];

  collection: any[] = [
    { value: 'Energy', displayName: 'Energy', checked: false },
    {
      value: 'Expressions',
      displayName: 'Expressions',
      checked: false,
    },
    { value: 'Harvest', displayName: 'Harvest', checked: false },
    {
      value: 'Small paintings',
      displayName: 'Small paintings',
      checked: false,
    },
    {
      value: 'Landscapes',
      displayName: 'Landscapes',
      checked: false,
    },
    { value: 'Pond', displayName: 'Pond', checked: false },
    { value: 'Eden', displayName: 'Eden', checked: false },
    {
      value: 'Emotions paintings',
      displayName: 'Emotions paintings',
      checked: false,
    },
    {
      value: 'Sunflowers',
      displayName: 'Sunflowers',
      checked: false,
    },
    { value: 'Magnitude', displayName: 'Magnitude', checked: false },
    { value: 'Seasons', displayName: 'Seasons', checked: false },
    {
      value: 'Flowers paintings',
      displayName: 'Flowers paintings',
      checked: false,
    },
  ];

  constructor(private fb: FormBuilder) {
    this.filtersForm = this.fb.group({
      collection: this.fb.group({
        Energy: false,
        Expressions: false,
        Harvest: false,
        'Small paintings': false,
        Landscapes: false,
        Pond: false,
        Eden: false,
        'Emotions paintings': false,
        Sunflowers: false,
        Magnitude: false,
        Seasons: false,
        'Flowers paintings': false,
      }),
      category: this.fb.group({
        Abstract: false,
        Figurative: false,
        'Abstract Figurative': false,
      }),
      size: this.fb.group({
        S: false,
        M: false,
        L: false,
        X: false,
      }),
      sort_by: this.fb.group({
        sort_type: 'id_desc',
      }),
      price: this.fb.group({
        max: [undefined, Validators.pattern('^[0-9]*$')],
        min: [undefined, Validators.pattern('^[0-9]*$')],
      }),
    });
  }

  buildFilterObject(filterObject: any) {
    const selectedFilter: string[] = [];
    const keys = Object.keys(filterObject);
    keys.forEach((key) => {
      if (filterObject[key] == true) {
        selectedFilter.push(key);
      }
    });
    return selectedFilter;
  }

  onSubmit(filters: any): void {
    if (!this.filtersForm.valid) {
      return;
    }
    const sortObject =
     this.sortByObjectsList.get(filters.sort_by.sort_type) as SortObject;

    const filterObject: FilterObject = {
      category: this.buildFilterObject(filters.category),
      size: this.buildFilterObject(filters.size),
      collection: this.buildFilterObject(filters.collection),
      min: filters.price.min,
      max: filters.price.max,
      sortBy: sortObject.sortBy,
      sortType: sortObject.sortType
    };
    this.filterChange.emit(filterObject);
    this.matExpansionPanelElement.close();
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Painting } from './model/painting.model';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PaintingService {
  paintings!: Painting[]

  constructor(private http: HttpClient) { }

 async getPaintings(paramsObject?: any): Promise<Painting[]> {
    this.paintings = await  this.http.get<Painting[]>(environment.apiUrl, {params: paramsObject}).toPromise();
    return this.paintings;
  }


  getPainting(id:string):Painting | null
  {
    const painting  = this.paintings.find((pain)=>pain.id ==id);
    if(painting === undefined)
    {
      return null;;
    }
    return painting;
  }

}


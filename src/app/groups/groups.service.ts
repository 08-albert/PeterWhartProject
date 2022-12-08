import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {Painting} from '../paintings/model/painting.model';
import {GroupsApiResponse} from './model/group.model';


@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  constructor(private http: HttpClient) {
  }

  getGroupedPaintingsById(id: number): Observable<Painting[]> {
    return this.http.get<GroupsApiResponse>(`${environment.apiGroupsUrl}/${id}`)
      .pipe(
        map((groupsApiResponse: GroupsApiResponse) => groupsApiResponse.groupedPainting
          .map((groupedPainting) => groupedPainting.painting))
      );
  }

}




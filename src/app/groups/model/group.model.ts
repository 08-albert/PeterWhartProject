import {Painting} from '../../paintings/model/painting.model';

export interface GroupType {
  id: number;
  name: string;
  description: string;
}

export interface GroupedPainting {
  id: number;
  painting: Painting;
}

export interface GroupsApiResponse {
  id: string;
  groupNameEN: string;
  groupNameFR: string;
  link: string;
  groupType: GroupType;
  groupedPainting: GroupedPainting[];
}

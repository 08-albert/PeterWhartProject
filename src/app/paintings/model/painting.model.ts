export interface Painting {
  id: string;
  image: string;
  titleEN: string;
  titleFR: string;
  featuresEN: string;
  featuresFR: string;
  year: number;
  priceCAD: number;
  size: PaintingSize;
  height: number;
  width: number;
  categoryEN: PaintingCategory;
  collectionEN: string;
}

export enum PaintingSize {
  SMALL = 'S',
  MEDIUM = 'M',
  LARGE = 'L',
  XLARGE = 'X'
}

export enum PaintingCategory {
  ABSTRACT = 'Abstract',
  FIGURATIVE = 'Figurative',
  ABSTRACTFIGURATIVE = 'Abstract Figurative'
}


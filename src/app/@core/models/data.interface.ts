export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  isFavorite?: boolean;
}

export interface Location {
  name: string;
  type: string;
  dimension: string;
  residents: number;
}


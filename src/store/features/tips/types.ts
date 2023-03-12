export interface TipStructure {
  commonName: string;
  scientificName: string;
  careLevel: string;
  water: string;
  light: string;
  tip: string;
  image: string;
}

export type TipsStructure = TipStructure[];

export interface TipsFromApi {
  tips: TipsStructure;
}

export interface TipStructure {
  id: string;
  commonName: string;
  scientificName: string;
  careLevel: string;
  water: string;
  light: string;
  tip: string;
  image: string;
  sharedBy: string;
}

export type TipsStructure = TipStructure[];

export interface TipsFromApi {
  tips: TipsStructure;
}

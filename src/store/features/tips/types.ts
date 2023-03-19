export interface TipStructureToBeCreated {
  commonName: string;
  scientificName: string;
  careLevel: string;
  water: string;
  light: string;
  tip: string;
  image: string;
  sharedBy: string;
}

export interface TipStructure extends TipStructureToBeCreated {
  id: string;
}

export type TipsStructure = TipStructure[];

export interface TipsFromApi {
  tips: TipsStructure;
  tip: TipStructure;
}

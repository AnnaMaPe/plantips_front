import {
  TipsFromApi,
  TipsStructure,
  TipStructure,
} from "../store/features/tips/types";

export const monstera: TipStructure = {
  commonName: "Monstera",
  scientificName: "Monstera deliciosa",
  careLevel: "Best for conneiseurs",
  water: "Twice per week",
  light: "Indirect light",
  tip: "Do not overwater it",
  image: "pretty_plant.jpg",
};
export const mockListOfTips: TipsStructure = [monstera];

export const tipsFromApi: TipsFromApi = { tips: [monstera] };

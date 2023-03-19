import {
  TipsFromApi,
  TipsStructure,
  TipStructure,
} from "../store/features/tips/types";

export const monstera: TipStructure = {
  id: "123456",
  commonName: "Monstera",
  scientificName: "Monstera deliciosa",
  careLevel: "Best for conneiseurs",
  water: "Twice per week",
  light: "Indirect light",
  tip: "Do not overwater it",
  image: "pretty_plant.jpg",
  sharedBy: "640631137b5cc26616353c5e",
};

export const maranta: TipStructure = {
  id: "23242424334",
  commonName: "Maranta lemon",
  scientificName: "Epipemnum aureum",
  careLevel: "Only for experts",
  light: "Low indirect light",
  water: "Every other day",
  tip: "Its leaves rise during the night, if you see that it stops doing so, it is time to water your Maranta!",
  image: "beatufiulplant.jpeg",
  sharedBy: "1229379442",
};
export const mockListOfTips: TipsStructure = [monstera];

export const tipsFromApi: TipsFromApi = {
  tips: [monstera],
  tip: monstera,
};

export const marantaToBeCreated = {
  commonName: "Maranta lemon",
  scientificName: "Epipemnum aureum",
  careLevel: "Only for experts",
  light: "Low indirect light",
  water: "Every other day",
  tip: "Its leaves rise during the night, if you see that it stops doing so, it is time to water your Maranta!",
  image: "beatufiulplant.jpeg",
  sharedBy: "",
};

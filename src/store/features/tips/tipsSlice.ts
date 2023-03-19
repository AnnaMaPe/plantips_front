import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TipsFromApi, TipsStructure, TipStructure } from "./types";

export const tipsInitialState: TipsFromApi = {
  tips: [],
  tip: {
    id: "",
    commonName: "",
    scientificName: "",
    careLevel: "",
    water: "",
    light: "",
    tip: "",
    image: "",
    sharedBy: "",
  },
};

const tipsSlice = createSlice({
  name: "tips",
  initialState: tipsInitialState,
  reducers: {
    loadAllTips: (
      currentTipsState,
      action: PayloadAction<TipsStructure>
    ): TipsFromApi => ({
      ...currentTipsState,
      tips: [...action.payload],
    }),

    deleteTipById: (currentTipsState, action: PayloadAction<string>) => ({
      ...currentTipsState,
      tips: currentTipsState.tips.filter((tip) => tip.id !== action.payload),
    }),

    loadTipById: (
      currentTipsState,
      action: PayloadAction<TipStructure>
    ): TipsFromApi => ({
      ...currentTipsState,
      tip: action.payload,
    }),
  },
});

export const tipsReducer = tipsSlice.reducer;
export const {
  loadAllTips: loadAllTipsActionCreator,
  deleteTipById: deleteTipByIdActionCreator,
  loadTipById: loadTipByIdActionCreator,
} = tipsSlice.actions;

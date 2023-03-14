import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TipsFromApi, TipsStructure } from "./types";

const tipsInitialState: TipsFromApi = { tips: [] };

const tipsSlice = createSlice({
  name: "tips",
  initialState: tipsInitialState,
  reducers: {
    loadAllTips: (currentTipsState, action: PayloadAction<TipsStructure>) => ({
      ...currentTipsState,
      tips: [...action.payload],
    }),
  },
});

export const tipsReducer = tipsSlice.reducer;
export const { loadAllTips: loadAllTipsActionCreator } = tipsSlice.actions;

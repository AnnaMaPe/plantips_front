import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TipsFromApi, TipsStructure } from "./types";

const tipsInitialState: TipsFromApi = { tips: [] };

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
    deleteTipById: (currentTipsState, action: PayloadAction<string>) => {
      currentTipsState.tips.filter((tip) => tip.id !== action.payload);
    },
  },
});

export const tipsReducer = tipsSlice.reducer;
export const {
  loadAllTips: loadAllTipsActionCreator,
  deleteTipById: deleteTipByIdActionCreator,
} = tipsSlice.actions;

import {
  deleteTipByIdActionCreator,
  loadAllTipsActionCreator,
  loadTipByIdActionCreator,
  tipsInitialState,
  tipsReducer,
} from "./tipsSlice";
import { TipsFromApi } from "./types";
import { maranta, monstera } from "../../../mocks/tipsMocks";

describe("Given a tipsReducer reducer", () => {
  describe("When it receives a new tip and the loadTips action", () => {
    test("Then it should update an empty list with the new tip", () => {
      const newTip = monstera;

      const loadTipsAction = loadAllTipsActionCreator([newTip]);
      const result = tipsReducer(tipsInitialState, loadTipsAction);
      const updatedTipsList = {
        ...tipsInitialState,
        tips: [monstera],
      };

      expect(updatedTipsList).toStrictEqual(result);
    });
  });

  describe("When it receives two tips and the deleteTipById action to delete the monstera", () => {
    test("Then it should update the list without the monstera", () => {
      const initialTipState: TipsFromApi = {
        ...tipsInitialState,
        tips: [monstera, maranta],
      };

      const deleteTipByIdAction = deleteTipByIdActionCreator(monstera.id);
      const result = tipsReducer(initialTipState, deleteTipByIdAction);
      const updatedTipsList = {
        ...tipsInitialState,
        tips: [maranta],
      };

      expect(updatedTipsList).toStrictEqual(result);
    });
  });

  describe("When it receives a monstera-tip and the loadTipById action", () => {
    test("Then it should update the list that contains a maranta and show only the monstera", () => {
      const initialTipState: TipsFromApi = {
        ...tipsInitialState,
        detailTip: maranta,
      };

      const loadTipByIdAction = loadTipByIdActionCreator(monstera);
      const result = tipsReducer(initialTipState, loadTipByIdAction);
      const updatedTipsList = {
        ...tipsInitialState,
        detailTip: monstera,
      };

      expect(updatedTipsList).toStrictEqual(result);
    });
  });
});

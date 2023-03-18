import {
  deleteTipByIdActionCreator,
  loadAllTipsActionCreator,
  loadTipByIdActionCreator,
  tipsReducer,
} from "./tipsSlice";
import { TipsFromApi } from "./types";
import { maranta, monstera } from "../../../mocks/tipsMocks";

describe("Given a tipsReducer reducer", () => {
  describe("When it receives a new tip and the loadTips action", () => {
    test("Then it should update an empty list with the new tip", () => {
      const initialTipState: TipsFromApi = { tips: [] };
      const newTip = monstera;

      const loadTipsAction = loadAllTipsActionCreator([newTip]);
      const result = tipsReducer(initialTipState, loadTipsAction);
      const updatedTipsList = {
        tips: [monstera],
      };

      expect(updatedTipsList).toStrictEqual(result);
    });
  });

  describe("When it receives two tips and the deleteTipById action to delete the monstera", () => {
    test("Then it should update the list without the monstera", () => {
      const initialTipState: TipsFromApi = { tips: [monstera, maranta] };

      const deleteTipByIdAction = deleteTipByIdActionCreator(monstera.id);
      const result = tipsReducer(initialTipState, deleteTipByIdAction);
      const updatedTipsList = {
        tips: [maranta],
      };

      expect(updatedTipsList).toStrictEqual(result);
    });
  });

  describe("When it receives a monstera-tip and the loadTipById action", () => {
    test("Then it should update the list that contains a maranta and show only the monstera", () => {
      const initialTipState: TipsFromApi = { tips: [maranta] };

      const loadTipByIdAction = loadTipByIdActionCreator(monstera);
      const result = tipsReducer(initialTipState, loadTipByIdAction);
      const updatedTipsList = {
        tips: [monstera],
      };

      expect(updatedTipsList).toStrictEqual(result);
    });
  });
});

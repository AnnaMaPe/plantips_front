import { loadAllTipsActionCreator, tipsReducer } from "./tipsSlice";
import { TipsFromApi } from "./types";
import { monstera } from "../../../mocks/tipsMocks";

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
});

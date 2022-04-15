import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CriterionType } from "../../types/CriterionItem";

export const criteriaSlice = createSlice({
  name: "criteria",
  initialState: {
    criteria: <CriterionType[]>[],
    count: 0,
  },
  reducers: {
    addCriteria: (state, action: PayloadAction<CriterionType>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (!state.criteria.find((crit) => crit.name === action.payload.name)) {
        state.criteria = [...state.criteria, action.payload];
        state.count += 1;
      }
    },
    setCriteriaWeight: (state, action: PayloadAction<CriterionType>) => {
      console.log(state.count);

      const crit = state.criteria.find(
        (crit) => crit.name === action.payload.name
      );
      crit!.weight = action.payload.weight;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCriteria, setCriteriaWeight } = criteriaSlice.actions;

export default criteriaSlice.reducer;

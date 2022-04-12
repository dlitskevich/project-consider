import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../types/CriterionItem";

export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: <Item[]>[],
    count: 0,
  },
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (!state.items.find((item) => item.name === action.payload.name)) {
        state.items.push(action.payload);
        state.count += 1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem } = itemsSlice.actions;

export default itemsSlice.reducer;

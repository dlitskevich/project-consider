import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item, Spec } from "../../types/CriterionItem";

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
    setItemSpecWeight: (
      state,
      action: PayloadAction<Spec & { itemName: string }>
    ) => {
      try {
        const item = state.items.find(
          (item) => item.name === action.payload.itemName
        );
        const spec = item!.specs.find(
          (spec) => spec.name === action.payload.name
        );
        if (spec) {
          spec.weight = action.payload.weight;
        }
        // else {
        //   item!.specs = [
        //     ...item!.specs,
        //     {
        //       name: action.payload.name,
        //       value: "",
        //       weight: action.payload.weight,
        //     },
        //   ];
        // }
      } catch {
        console.log("setItemWeight Error");
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, setItemSpecWeight } = itemsSlice.actions;

export default itemsSlice.reducer;

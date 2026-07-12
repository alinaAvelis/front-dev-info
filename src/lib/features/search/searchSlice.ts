import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type searchState = {
  value: string;
};

const initialState = {
  value: "",
} as searchState;

export const search = createSlice({
  name: "search",
  initialState,
  reducers: {
    reset: () => initialState,
    setSearchState: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const {
  setSearchState,
  reset,
} = search.actions;
export default search.reducer;

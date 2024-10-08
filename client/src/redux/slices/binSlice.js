import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  binContent: [],
};

const binSlice = createSlice({
  name: "bin",
  initialState,
  reducers: {
    setBinContent: (state, action) => {
      state.binContent = action.payload;
    },
    addToBin: (state, action) => {
      state.binContent.push(action.payload);
    },
    removeFromBin: (state, action) => {
      state.binContent = state.binContent.filter(
        (item) => item.name !== action.payload
      );
    },
    restoreFromBin: (state, action) => {
      state.binContent = state.binContent.filter(
        (item) => item.name !== action.payload.name
      );
    },
    emptyBin: (state) => {
      state.binContent = [];
    },
  },
});

export const {
  setBinContent,
  addToBin,
  removeFromBin,
  restoreFromBin,
  emptyBin,
} = binSlice.actions;

export default binSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    data: [], // array of objects from API
    filteredTitle: [],
    isLoading: true,
  },
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
    },
    searchByName: (state, action) => {
      const filteredResult = state.data.filter((product) =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        filteredTitle:
          action.payload.length > 0 ? filteredResult : [...state.data],
      };
    },
  },
});

export const { searchByName, getData } = searchSlice.actions;

export default searchSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Slice/cartSlice";
import searchSlice from "../Slice/searchSlice";

const store = configureStore({

  reducer: {
    cart: cartSlice.reducer,
    search: searchSlice.reducer,
  },
});

export default store;
// (alias) const cartSlice: Slice<{
//   itemsList: never[];
//   totalQuantity: number;
// }, {
//   addToCart(state: WritableDraft<{
//       itemsList: never[];
//       totalQuantity: number;
//   }>, action: {
//       payload: any;
//       type: string;
//   }): void;
// }, "cart">
// import cartSlice

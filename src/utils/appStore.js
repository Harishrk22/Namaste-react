import cartReducer from "./cartSlice.js";
const { configureStore } = require("@reduxjs/toolkit");

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;

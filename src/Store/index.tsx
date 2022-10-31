import { configureStore } from "@reduxjs/toolkit";
import VehicleSlice from "./Vehicle/reducer";
export const store = configureStore({
  reducer: {
    vehicle: VehicleSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

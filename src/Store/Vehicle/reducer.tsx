import { createSlice } from "@reduxjs/toolkit";
import { GetRoutes, getVehicleNumber } from "./action";



type VehicleData = {
  vehicleData: null | any;
  startDate: null;
  endDate: string;
  selectedId: number;
  routes: null;
};

const initialState: VehicleData = {
  vehicleData: null,
  startDate: null,
  endDate: "",
  selectedId: 0,
  routes: null,
};

export const VehicleSlice = createSlice({
  name: "vehicleSlice",
  initialState: initialState,
  reducers: {
    getStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    getEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    selectedId: (state, action) => {
      state.selectedId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getVehicleNumber.fulfilled, (state, action) => {
      state.vehicleData = action.payload;
    });

    builder.addCase(GetRoutes.fulfilled, (state, action) => {
      state.routes = action.payload;
    });
  },
});

export const { getStartDate, getEndDate, selectedId } = VehicleSlice.actions;

export default VehicleSlice.reducer;

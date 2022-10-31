import { RootState } from "../index";

export const vehicleData = (state: RootState) => state.vehicle.vehicleData;

export const startDate = (state: RootState) => state.vehicle.startDate;
export const endDate = (state: RootState) => state.vehicle.endDate;

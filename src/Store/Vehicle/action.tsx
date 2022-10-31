import { createAsyncThunk } from "@reduxjs/toolkit";

type VehicleDate = {
  startDate: string;
  endDate: string;
  carId: number;
};

export const getVehicleNumber: any = createAsyncThunk(
  "Vehicle/getVehicleNumber",
  async () => {
    const responce = await fetch(
      `https://mapon.com/api/v1/unit/list.json?key=${todo}`,
      {
        method: "GET",
      }
    );
    const data = await responce.json();

    if(!responce.ok) {
      throw new Error();
    }

    return data;
  }
);

export const GetRoutes: any = createAsyncThunk(
  "Vehicle/GetRoutes",
  async ({ startDate, endDate, carId }: VehicleDate) => {
    const responce = await fetch(
      `https://mapon.com/api/v1/route/list.json?key=${todo}&unit_id=${carId}&from=${startDate}&till=${endDate}`,
      {
        method: "GET",
      }
    );

    const data = await responce.json();
    return data;
  }
);

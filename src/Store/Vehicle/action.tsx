import { createAsyncThunk } from "@reduxjs/toolkit";
import env from "react-dotenv";

type VehicleDate = {
  startDate: string;
  endDate: string;
  carId: number;
};

const apiKey = env.REACT_APP_API_KEY;

export const getVehicleNumber: any = createAsyncThunk(
  "Vehicle/getVehicleNumber",
  async () => {
    const responce = await fetch(
      `https://mapon.com/api/v1/unit/list.json?key=${apiKey}`,
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
      `https://mapon.com/api/v1/route/list.json?key=${apiKey}&unit_id=${carId}&from=${startDate}&till=${endDate}`,
      {
        method: "GET",
      }
    );

    const data = await responce.json();
    return data;
  }
);

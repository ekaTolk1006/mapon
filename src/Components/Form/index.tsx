import React, { useEffect, useState } from "react";
import styles from "./form.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { GetRoutes, getVehicleNumber } from "../../Store/Vehicle/action";
import Map from "../Map/index";
import { endDate, startDate, vehicleData } from "../../Store/Vehicle";
import { Button } from "../../common/Button/index";
import { DatePickers } from "../Datepickers/index";
export const Form = () => {
  const [selectData, setSelectData] = useState("");
  const dispatch = useDispatch();
  const [opemMap, setOpenMap] = useState(false);

  const from = useSelector(startDate);
  const till = useSelector(endDate);

  const select = useSelector(vehicleData);

  useEffect(() => {
    dispatch(getVehicleNumber());
  }, []);

  const onSubmit = () => {
    dispatch(
      GetRoutes({
        startDate: from,
        endDate: till,
        carId: selectData,
      })
    );
    setOpenMap(true);
  };

  return (
    <div className={styles.formBlock}>
      <div className={styles.header}>Route report</div>
      <div className={styles.formFields}>
        <div className={styles.firstRow}>
          <div>
            Vehicle number<span style={{ color: "red" }}>*</span>
          </div>
          <select
            className={styles.selector}
            id="VehicleNumber"
            value={selectData}
            onChange={(e) => setSelectData(e.target.value)}
          >
            {select?.data?.units.map((item: any) => (
              <option value={item.unit_id}>{item.number}</option>
            ))}
          </select>
        </div>
        <div className={styles.secondRow}>
          <div>Period</div>
          <div className={styles.datePickers}>
            <DatePickers />
          </div>
        </div>
      </div>
      {opemMap ? (
        <div className={styles.map}>
          <Map />
        </div>
      ) : (
        ""
      )}
      <div className={styles.formFooter}>
        <Button onClick={() => onSubmit()} text="Generate" />
      </div>
    </div>
  );
};

import { Stack, TextField } from "@mui/material";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getStartDate, getEndDate } from "../../Store/Vehicle/reducer";

import styles from "./datepickers.module.scss";

export const DatePickers = () => {
  const dispatch = useDispatch();

  const dateFormat = (date: any) => {
    const formatedDate = date.format('');
    return formatedDate;
  };

  const [firstDate, setFirstDate] = React.useState<Dayjs | null>(
    dayjs(new Date())
  );
  const [secondDate, setSecondDate] = React.useState<Dayjs | null>(
    dayjs(new Date())
  );

  useEffect(() => {
    dispatch(getStartDate(dateFormat(firstDate)));
    dispatch(getStartDate(dateFormat(secondDate)));
  }, [dispatch, firstDate, secondDate]);

  const handleFirstDateChange = (newValue: Dayjs | null) => {
    setFirstDate(newValue);
  };
  const handleSecondDateChange = (newValue: Dayjs | null) => {
    setSecondDate(newValue);
    dispatch(getEndDate(dateFormat(secondDate)));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3} className={styles.datePickerBlock}>
        <DesktopDatePicker
          className={styles.datePicker}
          label="From"
          inputFormat="YYYY/MM/DD"
          value={firstDate}
          onChange={handleFirstDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <DesktopDatePicker
          className={styles.datePicker}
          label="To"
          inputFormat="YYYY/MM/DD"
          value={secondDate}
          onChange={handleSecondDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
};

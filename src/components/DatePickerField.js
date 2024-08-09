import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import { Datepicker } from "flowbite-react";

import "react-datepicker/dist/react-datepicker.css";
const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <>
      <div className="mb-2 block">
        <label htmlFor={props.id || props.name}>Data Końcowa</label>
      </div>
      <DatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(val) => {
          setFieldValue(field.name, val);
        }}
      />
    </>
  );
};
export default DatePickerField;
/* import React from "react";
import { Datepicker } from "flowbite-react";
import { useField, useFormikContext } from "formik";

const DatePickerField = ({ name = "" }) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;
  const convertUTCDateToLocalDate = (date) => {
    var newDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60 * 1000
    );
    return newDate;
  };
  return (
    <Datepicker
      language="PL"
      title="Data Dostarczenia"
      weekStart={1}
      labelTodayButton="Dzisiaj"
      labelClearButton="Wyczyść"
      {...field}
      // defaultDate={new Date("2024-07-05T14:48:00.000Z")}
      selected={value}
      onSelectedDateChanged={(date) => setValue(date)}
    />
  );
};
export default DatePickerField; */

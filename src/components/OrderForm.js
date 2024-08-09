import React from "react";
import {
  Button,
  Modal,
  Datepicker,
  Label,
  Radio,
  Select,
  Textarea,
  FileInput,
  TextInput,
} from "flowbite-react";
import { IoCheckmarkCircleOutline, IoPlayCircleOutline } from "react-icons/io5";
import { AiOutlinePauseCircle } from "react-icons/ai";

import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import DatePickerField from "./DatePickerField";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <div className="mb-2 block">
        <label htmlFor={props.id || props.name}>{label}</label>
      </div>
      <TextInput className="mb-2 block text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2 block">
      <label className="mb-2 block" htmlFor={props.id || props.name}>
        {label}
      </label>
      <Select className="mb-2 block" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2 block">
      <label htmlFor={props.id || props.name}>{label}</label>
      <Textarea {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
const MyFileInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor={props.id || props.name} value={label} />
        </div>
        <div className="flex w-full items-center justify-center mb-2">
          <Label
            htmlFor="files"
            className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
              <svg
                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <FileInput
              {...field}
              {...props}
              id="dropzone-file"
              className=""
              //onChange={formik.handleChange}
              multiple
            />
          </Label>
        </div>
      </div>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

<div className="max-w-md">
  <div className="mb-2 block">
    <Label htmlFor="description" value="Opis" />
  </div>
  <div className="flex w-full items-center justify-center mb-2">
    <Label
      htmlFor="files"
      className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
    >
      <div className="flex flex-col items-center justify-center pb-6 pt-5">
        <svg
          className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
          />
        </svg>
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Click to upload</span> or drag and
          drop
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          SVG, PNG, JPG or GIF (MAX. 800x400px)
        </p>
      </div>
      <FileInput
        id="dropzone-file"
        className=""
        //onChange={formik.handleChange}
        multiple
      />
    </Label>
  </div>
</div>;
// And now we can use these
export default function SignupForm(props) {
  console.log(props.orderData);
  const orderData = props.orderData;
  return (
    <>
      <Formik
        initialValues={{
          date: orderData ? new Date(orderData.finalDate) : new Date(),
          status: orderData ? orderData.status : "1",
          progress: "",
          deliveryType: orderData ? orderData.deliveryType : "1",
          description: orderData ? orderData.description : "",
          email: orderData ? orderData.email : "",
          price: orderData ? orderData.price : "",
          pieces: "",
          //  finalDate: orderData && Date.parse(orderData.finalDate),
          deliveryAdress: orderData ? orderData.deliveryAdress : "",
          invoiceAdress: orderData ? orderData.invoiceAdress : "",
          files: "",
        }}
        /*  validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          jobType: Yup.string()
            .oneOf(
              ["designer", "development", "product", "other"],
              "Invalid Job Type"
            )
            .required("Required"),
        })}*/
        onSubmit={(values, { setSubmitting }) => {
          console.log("submit");
          props.modal(false);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 4);
        }}
      >
        <Form id="myform">
          <h2 className="font-bold">Dane:</h2>
          <br />
          <div className="grid grid-cols-4 gap-4">
            <div>
              <DatePickerField name="date" label="date" type="date" />
            </div>
            <div>
              <MyTextInput
                label="Email klienta"
                name="email"
                type="email"
                placeholder="kowalski@gmail.com"
              />
            </div>
            <div>
              <MyTextInput
                label="Cena"
                name="price"
                type="float"
                placeholder="PLN"
              />
            </div>
            <div>
              <MyTextInput
                label="Adres do faktury"
                name="deliveryAdress"
                type="text"
                placeholder="adres do faktury"
              />
            </div>
            <div>
              <MyTextInput
                label="Adres do faktury"
                name="invoiceAdress"
                type="text"
                placeholder="adres do faktury"
              />
            </div>

            <MySelect label="Status Zamówienia" name="status">
              <option value="1">Nowy</option>
              <option value="2">Rysowanie/Wypalanie</option>
              <option value="3">Zagniatarka</option>
              <option value="4">Składanie</option>
              <option value="5">Spawanie</option>
              <option value="6">Magazyn(u Basi)</option>
              <option value="7">Montaz lamp/wentylacji</option>
              <option value="8">Pakowanie</option>
              <option value="9">Gotowe do wysyłki</option>
            </MySelect>

            <MySelect label="Dostawa" name="deliveryType">
              <option value="1">Odbiór Osobisty</option>
              <option value="2">Spedycja</option>
              <option value="3">Paleta</option>
              <option value="4">Paczka</option>
            </MySelect>
            <Button.Group>
              <Button color="gray">
                <IoPlayCircleOutline className="h-8 w-8" />
              </Button>
              <Button color="gray">
                <AiOutlinePauseCircle className=" h-8 w-8" />
              </Button>
              <Button color="gray">
                <IoCheckmarkCircleOutline className=" h-8 w-8" />
              </Button>
            </Button.Group>
          </div>
          <hr />
          <MyFileInput
            label="Pliki"
            name="files"
            type="file"
            //placeholder="adres do faktury"
          />
          <MyTextArea
            label="Uwagi do zamówienia"
            type="text"
            name="description"
            placeholder="Uwagi do zamówienia..."
            rows={4}
          />
        </Form>
      </Formik>
    </>
  );
}

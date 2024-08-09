import {
  Button,
  Modal,
  Datepicker,
  Label,
  Select,
  Textarea,
  FileInput,
  TextInput,
} from "flowbite-react";
import OrderForm from "./OrderForm";
import { useState } from "react";
import { useFormik, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import DatePickerField from "./DatePickerField";
const validationSchema = Yup.object({
  date: Yup.date().required("Required"),
});

export default function OrderModal(props) {
  const [openModal, setOpenModal] = useState(false);
  const orderData = props.orderData;

  const convertUTCDateToLocalDate = (date) => {
    var newDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60 * 1000
    );
    return newDate;
  };
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  /*const formik = useFormik({
    initialValues: {
      status: orderData ? orderData.status : 1,
      progress: orderData && orderData.progress,
      deliveryType: orderData ? orderData.deliveryType : 1,
      description: orderData && orderData.description,
      orderEmail: orderData && orderData.orderEmail,
      price: orderData && orderData.price,
      pieces: orderData && orderData.pieces,
      finalDate: orderData && Date.parse(orderData.finalDate),
      deliveryAdress: orderData && orderData.deliveryAdress,
      invoiceAdress: orderData && orderData.invoiceAdress,
      countrySelector: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setOpenModal(false);
    },
  });*/
  //console.log(formik);
  const test = (t) => {
    //formik.values.finalDate = ;
    console.log(t);
  };

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>{props.buttonText}</Button>
      <Modal
        size="5xl"
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>Zamówienie</Modal.Header>
        <Modal.Body>
          <OrderForm modal={setOpenModal} orderData={orderData} />
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" form="myform">
            {orderData ? "Zapisz" : "Utwórz"}
          </Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Anuluj
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

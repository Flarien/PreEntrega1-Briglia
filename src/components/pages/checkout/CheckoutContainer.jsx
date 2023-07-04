import Checkout from "./Checkout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useContext, useState } from "react";
import { cartContext } from "../../../context/CartContext";

const CheckoutContainer = () => {
  const { cart, getTotalPrice } = useContext(cartContext);
  const { orderId, setOrderId } = useState();
  const { handleSubmit, handleChange, errors, total } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },

    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total: total,
      };

      let ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then((res) => console.log(res.id));

      cart.forEach((product) => {
        updateDoc(doc(db, "produts", product.id), {
          stock: product.stock - product.quantity,
        });
      });
    },

    validetorChange: false,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Este campo debe contener al menos 3 caracteres"),
      email: Yup.string()
        .email("este campo debe contener un email válido")
        .required("Este campo es obligatorio"),
      phone: Yup.string()
        .required()
        .min(10, "Ingrese un número de teléfono existente"),
    }),
  });

  console.log(errors);

  return (
    <Checkout
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
    />
  );
};

export default CheckoutContainer;

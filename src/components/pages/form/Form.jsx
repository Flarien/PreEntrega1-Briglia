import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
    },
    onSubmit: (datos) => {
      console.log("el formulario se envio");
      // conecto con la api
      console.log(datos);
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("El nombre es obligatorio")
        .min(3, "El campo debe tener al menos 3 caracteres"),
      email: Yup.string()
        .email("Ingresa una dirección de email válida")
        .required("El email es requerrido"),
      telefono:Yup.string()
        .required("El teléfono es obligatorio")
    }),
  });

  return (
    <div style={{ padding: "40px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          name="nombre"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          label="Teléfono"
          variant="outlined"
          name="telefono"
          onChange={handleChange}
          error={errors.telefono ? true : false}
          helperText={errors.telefono}
        />
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Form;

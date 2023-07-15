import { Button, TextField, Box } from "@mui/material";

const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div>
      <h1 className="title">Checkout</h1>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={2} maxWidth="400px">
            <TextField
              label="Nombre"
              variant="outlined"
              name="nombre"
              color="success"
              onChange={handleChange}
              helperText={errors.nombre}
              error={errors.nombre ? true : false}
            />
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              color="success"
              onChange={handleChange}
              helperText={errors.email}
              error={errors.email ? true : false}
            />
            <TextField
              label="Teléfono"
              variant="outlined"
              name="telefono"
              color="success"
              onChange={handleChange}
              helperText={errors.telefono}
              error={errors.telefono ? true : false}
            />
            <Button variant="contained" type="submit" color="success">
              Finalizar Compra
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default Checkout;

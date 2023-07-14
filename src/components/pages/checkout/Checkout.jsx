import { Button, TextField, Box } from "@mui/material";

const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
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
            helperText={errors.name}
            error={errors.name ? true : false}
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
            helperText={errors.phone}
            error={errors.phone ? true : false}
          />
          <Button variant="contained" type="submit" color="success">
            Finalizar Compra
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Checkout;

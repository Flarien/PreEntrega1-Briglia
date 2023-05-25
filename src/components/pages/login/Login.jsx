import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";

export const Login = () => {
  const [mostrarContraseña, setMostrarContraseña] = useState(false);

  return (
    <Box
      component={"form"}
      sx={{
        margin: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <TextField
        label="Email"
        variant="outlined"
        color="success"
        margin="normal"
        width="25ch"
      />

      <FormControl sx={{ width: "25ch" }} variant="outlined" color="success">
        <InputLabel htmlFor="outlined-adornment-password" color="success">
          Contraseña
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={mostrarContraseña ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setMostrarContraseña(!mostrarContraseña)}
                edge="end"
              >
                {mostrarContraseña ? (
                  <VisibilityOff />
                ) : (
                  <Visibility color="success" />
                )}
              </IconButton>
            </InputAdornment>
          }
          label="Contraseña"
        />
      </FormControl>

      <Button variant="contained" color="success">
        Contained
      </Button>
    </Box>
  );
};

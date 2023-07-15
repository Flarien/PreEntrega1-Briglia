import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#899752",
        py: 3,
        bottom: 0,
        width: "100%",
      }}
    >
      <Box
        sx={{
          maxWidth: "lg",
          margin: "0 auto",
          display: "flex",
          alignItems: { xs: "center", sm: "flex-start" },
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          textAlign: { xs: "center", sm: "left" },
          px: { xs: 2, sm: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: { xs: 0, sm: "3em" }
          }}
        >
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dciovdqaf/image/upload/v1689378015/logo_color_ss6eyn.png"
              alt="Logo"
              style={{ width: "100px" }}
            />
          </Link>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            component="a"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white" }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white" }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white" }}
          >
            <TwitterIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: "lg",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          mt: 1,
          px: { xs: 2, sm: 4 },
        }}
      >
        <Typography
          variant="caption"
          sx={{
            mx: 1,
            textDecoration: "none",
            color: "white",
            marginRight: "auto",
          }}
        >
          © Todos los derechos reservados
        </Typography>

        <Typography variant="body2" sx={{ mx: 1, textDecoration: "none" }}>
          <Link to="/" style={{ color: "white" }}>
            Sobre Nosotros
          </Link>
        </Typography>
        <Typography variant="body2" sx={{ mx: 1, textDecoration: "none" }}>
          <Link to="/" style={{ color: "white" }}>
            FAQ
          </Link>
        </Typography>
        <Typography variant="body2" sx={{ mx: 1, textDecoration: "none" }}>
          <Link to="/" style={{ color: "white" }}>
            Contacto
          </Link>
        </Typography>
        <Typography variant="body2" component="a" href="/"></Typography>
      </Box>
    </Box>
  );
};

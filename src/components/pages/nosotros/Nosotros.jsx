import { Box, Typography } from "@mui/material";

const Nosotros = () => {
  return (
    <Box sx={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1 className="title">Sobre Nosotros</h1>
      <Typography variant="body1" sx={{ marginBottom: "10px" }}>
        Vivero FloreSer es una empresa familiar dedicada desde hace generaciones a la producción y venta de plantas y servicios de paisajismo. Nos encontramos en pleno centro geográfico de la ciudad de Mar del Plata.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "10px" }}>
        En Vivero FloreSer somos fanáticos de la Jardinería, el Paisajismo y el Tiempo Libre y creemos fervientemente en que podemos mejorarle la experiencia en su hogar, campo, departamento o en su trabajo.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "10px" }}>
        Nuestra pasión por las plantas y el cuidado del medio ambiente nos ha llevado a ofrecer una amplia variedad de especies, desde plantas de interior hasta plantas de exterior, adaptadas a diferentes climas y necesidades.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "10px" }}>
        Nos enorgullece brindar a nuestros clientes productos de alta calidad, asesoramiento experto y un servicio excepcional. Nuestro equipo de profesionales capacitados está listo para ayudarte a encontrar las plantas perfectas para tus espacios y proporcionarte consejos y recomendaciones para su cuidado.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "10px" }}>
        Además de la venta de plantas, también ofrecemos servicios de paisajismo, diseño de jardines y mantenimiento de espacios verdes. Nos encanta ayudar a transformar los entornos y crear espacios hermosos y armoniosos.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "10px" }}>
        Te invitamos a explorar nuestro vivero en línea y descubrir nuestro amplio catálogo de plantas y productos relacionados. Estamos seguros de que encontrarás algo especial que se adapte a tus gustos y necesidades.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "10px" }}>
        ¡Gracias por elegir Vivero FloreSer! Estamos aquí para hacer de tu experiencia con las plantas una verdadera alegría y contribuir a un entorno más verde y saludable.
      </Typography>
    </Box>
  );
};

export default Nosotros;

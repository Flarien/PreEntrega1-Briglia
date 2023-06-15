import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ItemCard = ({ elemento }) => {
  return (
    <Card sx={{ width: 450, height: 300, backgroundColor: "white", borderRadius: 3, boxShadow: "4px 4px 6px 0 rgba(0,0,0,0.28)" }}>
      <Grid container>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            image={elemento.img}
            title={elemento.title}
            sx={{ height: 300, width: "100%", objectFit: "cover" }}
          />
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "60%",
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign={"center"}
            >
              {elemento.title}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              textAlign={"center"}
            >
              {elemento.description}
            </Typography>
            <Typography variant="subtitle1" textAlign={"center"}>
              ${elemento.price}.-
            </Typography>
          </CardContent>
          <CardActions style={{ display: "flex", justifyContent: "center" }}>
            <Link to={`/itemDetail/${elemento.id}`}>
              <Button
                variant="contained"
                size="small"
                sx={{ textTransform: "none", backgroundColor: "#899752",
                "&:hover": 
                  {backgroundColor: "#687630"}}}
              >
                Ver detalle
              </Button>
            </Link>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ItemCard;

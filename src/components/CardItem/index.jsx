import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { useNavigate, useOutletContext } from "react-router";
import toast from "react-hot-toast";

const CardItem = ({ product, index }) => {
  const navigate = useNavigate();
  // const handleAddToFavorites = (event) => {
  //   event.stopPropagation();

  //   const isItemExist = favorites.some(
  //     (favorite) => favorite.id === product.id
  //   );

  //   if (isItemExist) {
  //     toast.error("Item already exists in your favorites!");
  //   } else {
  //     setFavorites([...favorites, product]);
  //     localStorage.setItem(
  //       "favorites",
  //       JSON.stringify([...favorites, product])
  //     );
  //     toast.success("Successfully added to favorites!");
  //   }
  // };

  return (
    <Card
      sx={{ minWidth: "100%" }}
      variant="outlined"
      
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: $ {product.unitPrice}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Discounted per unit: {product.quantityPerUnit}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Left in stock: {product.unitsInStock}
          </Typography>

          <Button
            sx={{ margin: "12px 0" }}
            variant="text"
            onClick={() => {
              navigate(`/detail/${product.id}`);
            }}
          >
            See Details
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardItem;

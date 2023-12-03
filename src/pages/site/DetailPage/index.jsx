import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { dataContext } from "../../../contexts/DataContext";

const DetailPage = () => {
  const { id } = useParams();
  // const [product, setProduct] = useState(null)
  const {productDetail, getProductDetail, setProductDetail} = useContext(dataContext);
  useEffect(()=>{
    setProductDetail(null)
  },[])
  useEffect(() => {
    getProductDetail(id)
  },[id]);
  return (
    <div>
      <Box sx={{ minHeight: "100vh", padding: "0 20px" }}>
      <Typography
        variant="h6"
        gutterBottom
        // align="center"
        style={{ padding: "20px", color: "#454545" }}
      >
        Product Detail
      </Typography>
      <Box sx={{ margin: "40px auto 0" }}>
        <Grid sx={{ flexGrow: 1 }} container spacing={3}>
          <Grid item xs={12} sm={6}>
            <img
            style={{width:"100%", height:"80%", objectFit:"cover"}}
              src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
              alt="placeholder"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom variant="h4" component="div">
              Product Name: <b>{productDetail?.name}</b>
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
            Product ID: <b>{id}</b>
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
            Quantity Per Unit: <b>{productDetail?.quantityPerUnit}</b>
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
            Units Left in Stock: <b>{productDetail?.unitsInStock}</b>
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
            Units Price: <b>{productDetail?.unitPrice}</b>
            </Typography>

          </Grid>
        </Grid>
      </Box>
    </Box>
    </div>
  )
}

export default DetailPage
import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardItem from '../CardItem';

const CardContainer = ({data}) => {
  return (
    <Box sx={{ margin: "0 auto" }}>
        <Grid sx={{ flexGrow: 1 }} container spacing={3}>
          {data ? (
            data.map((product, index) => {
              return (
                <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
                  <CardItem
                    product={product}
                    index={index}
                  />
                </Grid>
              );
            })
          ) : (
            <Typography gutterBottom variant="h5" component="div">
              No items
            </Typography>
          )}
        </Grid>
      </Box>
  )
}

export default CardContainer
import React, { useContext } from "react";
import CustomTable from "../../../components/CustomTable";
import { dataContext } from "../../../contexts/DataContext";
import { Box, Button, CircularProgress, TextField, Typography } from "@mui/material";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";


const Products = () => {
  const { data, filteredData,handleSearch, loading, currentItems } = useContext(dataContext);
  return (
    <React.Fragment>
        <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        style={{ display: "flex", justifyContent: "space-between", marginTop:"20px", marginBottom:"20px" }}
        noValidate
        autoComplete="off"
      >
        <Typography
        variant="h6"
        gutterBottom
        // align="center"
        style={{ margin: "20px 12px 12px" }}
      >
        Admin Products
      </Typography>
        <TextField
          id="outlined-basic"
          label="Seach"
          variant="outlined"
          size="small"
          placeholder="Search..."
          onChange={(e) => {
            handleSearch(e.target.value)
          }}
        />
      </Box>
      {loading ? (
        <Box sx={{ display: "flex", width: "100%", height:"90vh", alignItems:"center",justifyContent:"center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <CustomTable data={currentItems} />
      )}
      
    </React.Fragment>
  );
};

export default Products;

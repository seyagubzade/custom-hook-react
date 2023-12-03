import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button, TextField, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { dataContext } from "../../../contexts/DataContext";

const SiteHeader = () => {
  const { handleSearch } = useContext(dataContext);

  return (
    <AppBar position="static" color="transparent" sx={{boxShadow:"none"}}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{display: "flex", alignItems: "center", color: "#000"}}>
          <Typography variant="h6" component="div" style={{color:"#1976d2", fontWeight:"500"}}>
            MainSite
          </Typography>
          <Button
            component={Link}
            to="/"
            style={{ color: "#000", marginRight: "16px", marginLeft: "20px" }}
          >
            Products
          </Button>
          <Button component={Link} to="/admin" style={{ color: "#000" }}>
            Go to Admin
          </Button>
        </Box>

        <TextField
          style={{ margin: "16px"}}
          id="outlined-basic"
          label="Search"
          variant="outlined"
          size="small"
        //   inputProps={{
        //     style: {
        //       color: "#fff",
        //       borderColor: "#fff",
        //       borderColor:"#fff"
        //     },
        //   }}
        //   InputLabelProps={{
        //     style: {
        //         color: "#fff",
        //       },
        //   }}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default SiteHeader;

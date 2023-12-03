import React, { useContext } from "react";
import CardContainer from "../../../components/CardContainer";
import { dataContext } from "../../../contexts/DataContext";
import {
  Box,
  CircularProgress,
  InputLabel,
  MenuItem,
  Pagination,
  TextField,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CustomPagination from "../../../components/Pagination";

const Home = () => {
  const {
    data,
    filteredData,
    handleSearch,
    loading,
    currentItems,
    selectValue,
    sortByPrice,
  } = useContext(dataContext);


  return (
    <React.Fragment>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          variant="h5"
          gutterBottom
          style={{ margin: "20px", color: "#454545", display:"flex", alignItems:'center' }}
        >
          Products
        </Typography>
        <FormControl sx={{ m: 1, width: 300 }} style={{marginRight: '20px'}}>
          <InputLabel id="demo-simple-select-label" sx={{ width: "200px" }}>
            Sort by price
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectValue}
            label="Sort by price"
            onChange={(e)=>{sortByPrice(e.target.value)}}
          >
            <MenuItem value={"unsort"}>Not selected</MenuItem>
            <MenuItem value={"lowToHigh"}>Lowest to Highest</MenuItem>
            <MenuItem value={"highToLow"}>Highest to Lowest</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minHeight: "100vh", padding: "0 20px" }}>
        {loading ? (
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "90vh",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <CardContainer data={currentItems} />
        )}
      </Box>
      <CustomPagination />
    </React.Fragment>
  );
};

export default Home;

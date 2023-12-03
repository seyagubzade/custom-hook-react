import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { dataContext } from "../../contexts/DataContext";
import toast from "react-hot-toast";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const CustomTableRow = ({ product }) => {
    const {deleteData, handleModalOpen} = useContext(dataContext)
    
  return (
    <StyledTableRow>
      <StyledTableCell>{product.id}</StyledTableCell>
      <StyledTableCell>{product.name}</StyledTableCell>
      <StyledTableCell align="right">{product.unitPrice}</StyledTableCell>
      <StyledTableCell align="right">{product.unitsInStock}</StyledTableCell>
      <StyledTableCell align="right">
        <Button onClick={()=>{
            handleModalOpen(product)
        }} color="primary">
          <ModeEditIcon/>
        </Button>
        <Button
          
          onClick={() => {
            deleteData(product.id);
            toast.success("Product deleted!")
          }}
          color="error"
        >
          <DeleteIcon />
        </Button>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default CustomTableRow;
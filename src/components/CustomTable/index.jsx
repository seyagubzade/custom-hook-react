import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CustomTableRow from "../CustomTableRow";
import { Pagination, TablePagination } from "@mui/material";
import CustomPagination from "../Pagination";
import { dataContext } from "../../contexts/DataContext";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.light,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const CustomTable = ({ data }) => {
  const { pageNumbers, currentPage, handlePageChange, itemsPerPage, handleItemsPerPageChange } = useContext(dataContext);
  return (
    <TableContainer sx={{boxShadow:"none"}} component={Paper}>
      <Table sx={{ minWidth: 700, boxShadow:"none" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Unit Price</StyledTableCell>
            <StyledTableCell align="right">Units in Stock</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((product, index) => {
            return <CustomTableRow product={product} key={product.id} />;
          })}
        </TableBody>
      </Table>
      <CustomPagination />
    </TableContainer>
  );
};

export default CustomTable;

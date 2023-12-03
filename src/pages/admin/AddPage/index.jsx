import React, { useContext } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { dataContext } from "../../../contexts/DataContext";
import { useNavigate } from "react-router";
import * as Yup from "yup";

const style = {
  width: 400,
  bgcolor: "background.paper",
  m: "60px auto 0",
  p: 4,
};

const AddPage = () => {
  const { postData } = useContext(dataContext);
  const navigate = useNavigate();

  const ValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Min length should be 3!")
      .max(50, "Too Long!")
      .required("Required"),
    unitsInStock: Yup.number()
      .min(0, "Min value should be 0 !")
      .typeError("Only numbers are allowed for Units in Stock")
      .required("Required"),
    unitPrice: Yup.number()
      .typeError("Only numbers are allowed for Unit Price")
      .min(0, "Price cant be a negative value!")
      .required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      unitsInStock: "",
      unitPrice: "",
      quantityPerUnit: "48 - 6 oz jars",
      reorderLevel: 0,
      unitsOnOrder: 0,
      discontinued: true,
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      postData(values);
      toast.success("New product added!");
      navigate("/admin");
    },
  });

  return (
    <div>
      <Box sx={style}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Add Product
        </Typography>
        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            id="unitsInStock"
            name="unitsInStock"
            label="Units in Stock"
            value={formik.values.unitsInStock}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.unitsInStock && Boolean(formik.errors.unitsInStock)
            }
            helperText={
              formik.touched.unitsInStock && formik.errors.unitsInStock
            }
          />
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            id="unitPrice"
            name="unitPrice"
            label="Unit Price"
            value={formik.values.unitPrice}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.unitPrice && Boolean(formik.errors.unitPrice)}
            helperText={formik.touched.unitPrice && formik.errors.unitPrice}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            sx={{ height: "52px", boxShadow: "none" }}
          >
            Add Product
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default AddPage;

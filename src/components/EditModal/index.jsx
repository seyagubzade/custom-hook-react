import React, { useContext, useEffect } from "react";
import { dataContext } from "../../contexts/DataContext";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

const EditModal = () => {
  const { openModal, modalItem, handleModalClose, editData } =
    useContext(dataContext);
  const ValidationSchema = Yup.object().shape({
    name: Yup.string()
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
      name: modalItem?.name || "",
      unitsInStock: parseInt(modalItem?.unitsInStock, 10) || 0,
      unitPrice: modalItem?.unitPrice || "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      editData(modalItem.id, values);
      handleModalClose();
      toast.success("Product updated successfully!");
    },
  });

  useEffect(() => {
    formik.setValues({
      name: modalItem?.name || "",
      unitsInStock: parseInt(modalItem?.unitsInStock, 10) || 0,
      unitPrice: modalItem?.unitPrice || "",
    });
  }, [modalItem]);

  return (
    <Modal
      open={openModal}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" sx={{ mb: 2 }}>
          Edit Product
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
            Update Product
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default EditModal;

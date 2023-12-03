import React, { createContext, useEffect, useState } from "react";
import useHTTP from "../hooks/useHTTP";
import { BASE_URL } from "../env/env";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const {
    data,
    loading,
    error,
    productDetail,
    getData,
    postData,
    editData,
    deleteData,
    getProductDetail,
    setProductDetail,
  } = useHTTP(BASE_URL);

  const [filteredData, setFilteredData] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [selectValue, setSelectValue] = React.useState("");

  const handleModalOpen = (modalProduct) => {
    setOpenModal(true);
    setModalItem({ ...modalProduct });
  };

  const handleModalClose = () => setOpenModal(false);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredData(filtered);
  }, [data, searchText]);

  const handleSearch = (value) => {
    setSearchText(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };
  const sortByPrice = (value) => {
    setSelectValue(value);
    let newSorted;
  
    if (value === "lowToHigh") {
      newSorted = [...data].sort((a, b) => a.unitPrice - b.unitPrice);
    } else if (value === "highToLow") {
      newSorted = [...data].sort((a, b) => b.unitPrice - a.unitPrice);
    } else {
      newSorted = data; 
    }
  
    setFilteredData(newSorted);
  };
  

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData?.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredData?.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const values = {
    data,
    filteredData,
    searchText,
    handleSearch,
    loading,
    error,
    getData,
    postData,
    editData,
    deleteData,
    productDetail,
    getProductDetail,
    openModal,
    handleModalOpen,
    handleModalClose,
    modalItem,
    currentPage,
    itemsPerPage,
    handlePageChange,
    handleItemsPerPageChange,
    indexOfLastItem,
    indexOfFirstItem,
    currentItems,
    pageNumbers,
    setProductDetail,
    selectValue,
    setSelectValue,
    sortByPrice
  };
  return <dataContext.Provider value={values}>{children}</dataContext.Provider>;
};

export default DataProvider;

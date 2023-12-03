import React, { useEffect, useState } from "react";
import axios from 'axios';

const useHTTP = (baseURL) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [productDetail, setProductDetail] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(baseURL);
      setData(response.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
      setError(error.message);
    }
  };
  const getProductDetail = async (id) => {
    try {
      const response = await axios.get(`${baseURL}/${id}`);
      setProductDetail(response.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
      setError(error.message);
    }
  };

  const postData = async (newData) => {
    try {
      const response = await axios.post(baseURL, newData);
      getData();
      // console.log(response.data)
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const editData = async (id, editedData) => {
    try {
      const response = await axios.put(`${baseURL}/${id}`, editedData);
      getData();
      // console.log(response.data)
    } catch (error) {
      console.error("Error editing data:", error);
    }
  };

  const deleteData = async (id) => {
    try {
      const response = await axios.delete(`${baseURL}/${id}`);
      // console.log(response)
      getData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [baseURL]);

  return { data, loading, error, productDetail, getData, postData, editData, deleteData, getProductDetail, setProductDetail };
};

export default useHTTP;

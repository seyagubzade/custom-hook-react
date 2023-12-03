import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router";
import { dataContext } from "../../contexts/DataContext";
import AdminHeader from "../../layout/admin/Header";
import AdminFooter from "../../layout/admin/Footer";
import styled from "styled-components";
import EditModal from "../../components/EditModal";
import { Toaster } from "react-hot-toast";

const Admin = () => {
  const { data } = useContext(dataContext);

  return (
    <div>
      <AdminHeader />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <AdminFooter />

      <EditModal />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
const ContentContainer = styled.div`
  min-height: 90vh;
`;

export default Admin;

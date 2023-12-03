import React from 'react'
import { Outlet } from 'react-router'
import styled from 'styled-components'
import SiteHeader from '../../layout/site/Header'
import SiteFooter from '../../layout/site/Footer'

const Site = () => {
    
  return (
    <div>
        <SiteHeader />
        <ContentContainer>
        <Outlet/>
        </ContentContainer>
        <SiteFooter/>
    </div>
  )
}

const ContentContainer = styled.div`
min-height: 90vh;
background-color: #f5f5f5;

`

export default Site
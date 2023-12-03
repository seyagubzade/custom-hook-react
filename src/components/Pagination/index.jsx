import React, { useContext } from 'react'
import { dataContext } from '../../contexts/DataContext'
import styled from 'styled-components'

const CustomPagination = () => {
    const {pageNumbers,currentPage, handlePageChange} = useContext(dataContext)
  return (
    <PaginationContainer className="pagination-container" style={{ overflowX: "scroll" }}>
    <ul className="pagination-list">
      {pageNumbers.map((number) => (
        <li key={number} className={currentPage === number ? 'active' : ''}>
          <span onClick={() => handlePageChange(number)}>{number}</span>
        </li>
      ))}
    </ul>
  </PaginationContainer>
  )
}

const PaginationContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
.pagination-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    padding: 0;
  }
  
  .pagination-list li {
    margin: 0 5px;
    cursor: pointer;
  }
  
  .pagination-list li span {
    padding: 8px;
    border: 1px solid #ddd;
    display: block;  /* Ensure each number is on a new line */
  }
  
  .pagination-list li.active span {
    background-color: #007bff;
    color: #fff;
    border: 1px solid #007bff;
  }
`

export default CustomPagination
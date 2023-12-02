import styled from "styled-components";
import { PiPrinterThin } from "react-icons/pi"
import React from 'react';
import { useState, useEffect } from "react";
import ProductData from "../ProductData.json"
import CustomModal from "./Model";
import "./ProductDetails.css"




const MainContainer = styled.div`
    width:83%;
    height:100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin:auto;
    margin-top: 50px;
    padding:30px;
    border-radius: 15px;
`;

const MainTopDiv = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
`;

const MainTopDiv1 = styled.div`
    width:50%;
`;

const Search = styled.input`
    padding:10px;
    width:80%;
    border-radius:20px ;
    border:1px solid grey;
    font-size: medium;
`;


const MainTopDiv2 = styled.div`
    width:20%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const AddButton = styled.button`
    padding:5px 10px;
    border-radius: 20px;
    border:1px solid green;
    background-color: white;
    color:green;
    font-weight: 600;
    cursor: pointer;
`;

const PrintIcon = styled.div`
    font-size: 30px;
    color:green;
`;

const ProductDetailDiv = styled.table`
    width:100%;
    margin-top: 50px;
`;

const TableRowHead = styled.tr`
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
   
    
`;

const TableColumnHead = styled.th`
    padding:10px 0;
   /* border:1px solid red;*/
`;
const TableFirstColumnHead = styled.th`
    padding:10px 0;
    column-count: 1;
     /* border:1px solid red; */
   
`;

const TableLastColumnHead = styled.th`
    padding:10px 0;
    column-count: 1.5;
    text-align:center;
    
   /* border:1px solid red; */
`;

const StyledButton = styled.button`
  background-color: #4caf50; /* Set your desired background color */
  color: white; /* Set the text color */
  padding: 10px 15px; /* Set padding */
  border: none;
  border-radius: 5px; /* Set border radius for rounded corners */
  cursor: pointer;
`;
const StatusToggle = styled.div`
  display: flex;
  align-items: center;
  text-decoration:center;
   align-items:center
`;

const StatusSymbol = styled.span`
  font-size: 18px; /* Adjust the font size as needed */
   margin-left: 10px;
   text-decoration:center;
   align-items:center;
   /* Add margin for spacing */
  cursor:pointer;

  &:hover {
    color: blue; /* Change color on hover if desired */
  }
`;


const ProductDetails = () => {
    const [data, setProductData] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isApproved, setApproved] = useState();
    const [isMissing, setMissing] = useState();


    // console.log(ProductData)
    useEffect(() => {
        setProductData(ProductData)
    }, [])

    const openModal = (item) => {
        setModalOpen(true);
        console.log(item, "elel")
    };

    const closeModal = (id) => {
        setModalOpen(false);

    };
    const toggleStatus = (status) => {
        if (status === 'approved') {
            setApproved(!isApproved);
            setMissing(false);
        } else if (status === 'missing') {
            setMissing(!isMissing);
            setApproved(false);
        }
        // Add more conditions for other status values if needed
    };


  return (
      <MainContainer>
          <MainTopDiv>
              <MainTopDiv1>
                  <Search type="text" placeholder='Search...' />
              </MainTopDiv1>
              <MainTopDiv2>
                  <AddButton>Add Item</AddButton>
                  <PrintIcon><PiPrinterThin /></PrintIcon>
              </MainTopDiv2>
          </MainTopDiv>
          <ProductDetailDiv>
              <thead>
                  <TableRowHead>
                      <TableFirstColumnHead>Name of Product</TableFirstColumnHead>
                      <TableColumnHead>Brand</TableColumnHead>
                      <TableColumnHead>Price</TableColumnHead>
                      <TableColumnHead>Quantity</TableColumnHead>
                      <TableColumnHead>Total</TableColumnHead>
                      <TableLastColumnHead>Status</TableLastColumnHead>
                  </TableRowHead>
              </thead>
              <tbody>
                  {data.map((item) => (
                      <tr key={item.id}>

                          <div className="product-info">
                              <img src={item.image} alt={item.title} className="product-image" />
                              <div className="product-details">
                                  <h4>{item.title}</h4>
                              </div>
                          </div>
                          <td>{item.brand}</td>
                          <td>{item.price}</td>
                          <td>{item.qantity}</td>
                          <td>{item.price * item.qantity}</td>
                         <td>
                              <td ><StatusToggle>
                                  <StatusSymbol onClick={() => toggleStatus('approved')}>
                                      ✔   
                                  </StatusSymbol>
                                  <StatusSymbol onClick={() => toggleStatus('missing')}>
                                      ✗
                                  </StatusSymbol>
                                  <p>Status: {isApproved ? 'Approved ✅' : isMissing ? 'Missing' : ""}</p>
                                 
                              </StatusToggle></td>
                              

                                    
                                    
                              
                         </td>
                          <div>

                              
                          </div>
                        
                      </tr>
                  ))}
                 
              </tbody>
          </ProductDetailDiv>
      </MainContainer>
  )
}

export default ProductDetails
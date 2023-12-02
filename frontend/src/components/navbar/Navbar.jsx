import React from 'react';
import styled from "styled-components";
import { MdAllInbox, MdShoppingCart } from "react-icons/md";
import { AiOutlineDown } from "react-icons/ai";



const NavbarMain = styled.div`
    width:99.9%;
    height:40px;
    display: flex;
    justify-content: space-between;
    background-color: green;
    color:white;
`;

const Container1 = styled.div`
    width:50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
   
`;

const Container2 = styled.div`
    width:20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`;

const AIcon = styled.span`
  font-size  :10px ;
  
`;

const CartIcon = styled.span`
    font-size: 20px;
    color:white;
`;

const Main = styled.h1`
    font-style: italic;
`;

const Navbar = () => {
    return (
        <NavbarMain>
            <Container1>
                <Main>Reeco</Main>
                <p>Store</p>
                <p>Order</p>
                <p>Analytics</p>
            </Container1>
            <Container2>
                <CartIcon><MdShoppingCart /></CartIcon>
                <p>Hello, James <AIcon><AiOutlineDown /></AIcon></p>
            </Container2>
        </NavbarMain>
    )
}

export default Navbar;



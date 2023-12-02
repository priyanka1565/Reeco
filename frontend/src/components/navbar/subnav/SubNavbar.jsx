import React from 'react'
import styled from 'styled-components';


const SubNavContainer = styled.div`
    width:99.9%;
    height:80px;
    display: flex;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const SubNavDetails1 = styled.div`
    width:30%;
    padding-left: 100px;
    color:grey;
    line-height: 40px;
    font-size: small;
`;

const DetailSpan = styled.span`
    text-decoration: underline;
    
`;

const Main = styled.h2`
    color:black;
    margin-top:-5%
`;

const SubNavDetails2 = styled.div`
    width:24%;
`;

const DetailButton1 = styled.button`
    padding:5px 15px;
    border-radius: 20px;
    border:1px solid green;
    background-color: white;
    margin: 40px 50px 0 40px;
    
`;

const DetailButton2 = styled.button`
    padding:5px 15px;
    border-radius: 20px;
    border:1px solid green;
    background-color: green;
    color:white;
`;

const SubNavbar = () => {
    return (
        <SubNavContainer>
            <SubNavDetails1>
                <p>Order > <DetailSpan>Order 3245AGHB</DetailSpan></p>
                <Main>Order 3245AGHB</Main>
            </SubNavDetails1>
            <SubNavDetails2>
                <DetailButton1>Back</DetailButton1>
                <DetailButton2>Approve Order</DetailButton2>
            </SubNavDetails2>
        </SubNavContainer>
    )
}

export default SubNavbar;



import { Add, Remove } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Navbar from '../components/Navbar'

const Container = styled.div`
`;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  aligh-items: center;
  justify-content: space-between;
  padding: 20px;
`;
// const TopButton = styled.button`
//   padding: 10px;
//   font-weight: 600;
//   cursor: pointer;
// `;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
  
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 15px;
`;
const ProductDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Image = styled.img`
  height:150px;
  width:150px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display:flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px
  margin: 5px
`;
const ProductPrice = styled.div`
  font-size: 30px
  font-weight: 200
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height:1px;
  width:85%;
`;
const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.div`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "500"};
  font-size: ${props => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.div``;
const SummaryItemPrice = styled.div``;
const Button = styled.div`
  width:100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor:pointer;
`;




const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <Title>Your Order</Title>
        <Top>
          {/* <TopButton>Continue Shopping</TopButton> */}
          {/* <TopButton>Checkout Now</TopButton> */}
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                <Details>
                  <ProductName>
                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                  </ProductName>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$109.95</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                <Details>
                  <ProductName>
                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                  </ProductName>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$109.95</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$$</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping and Handling</SummaryItemText>
              <SummaryItemPrice>$$</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Tax</SummaryItemText>
              <SummaryItemPrice>$$</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$$</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );}

export default Cart
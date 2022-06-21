import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  margin-top: 150px;
  width: 90%;
`;
const ImgContainer = styled.div`
  flex: 1;
  position: relative;
  margin-left: 20%;
`;
const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  position: absolute;
  right: 0;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  // justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid grey;
  cursor: pointer;
  margin-left: 20px;
  &:hover {
    background-color: darkgrey;
  }
`;




const ItemDetails = () => {

  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <ImgContainer>
          <Image src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</Title>
          <Description>
            Your perfect pack for everyday use and walks in the forest. Stash
            your laptop (up to 15 inches) in the padded sleeve, your everyday
          </Description>
          <Price>109.95</Price>

          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default ItemDetails;

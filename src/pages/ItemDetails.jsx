import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar";
import { useCart } from "../providers/CartProvider";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  margin-top: 75px;
  width: 90%;
`;
const ImgContainer = styled.div`
  flex: 1;
  position: relative;
  margin-left: 20%;
`;
const Image = styled.img`
  object-fit: cover;
  position: absolute;
  right: 0;
  width: 75%;
  height: auto;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  margin-top: 10px;
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
  const cartContext = useCart();
  console.log(cartContext.shoppingItems);
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <ImgContainer>
          <Image src={cartContext.shoppingItems[0].image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{cartContext.shoppingItems[0].title}</Title>
          <Description>{cartContext.shoppingItems[0].description}</Description>
          <Price>{cartContext.shoppingItems[0].price}</Price>

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

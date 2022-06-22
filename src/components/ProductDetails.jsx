import  styled  from "styled-components"
import { useCart } from "../providers/CartProvider";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 75%; 
  width: 25%;
  position: relative; 
  padding:30px;
  `;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
`;
const Info = styled.div`
  position: absolute;
  top: 0px;
  width: 60%;
  height: 100%;
  margin-left:1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h3`
  color: white;
  margin-bottom: 20px;
`;
const Price = styled.h4`
  color: white;
  margin-bottom: 5px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color:white;
  color: gray;
  cursor: pointer;
  font-weight:600;
`;





// Use item prop from Products component
const ProductDetails = ({shoppingItems}) => {
  const cartContext = useCart();
  console.log(shoppingItems);
  return (
    <Container>
      <Image src={shoppingItems.image} />
      <Info>
        <Title>{shoppingItems.title}</Title>
        <Price>{shoppingItems.price}</Price>
        <Button> SHOP NOW</Button>
      </Info>
    </Container>
  );
}

export default ProductDetails
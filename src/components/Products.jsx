import styled from "styled-components"
// import { items } from "../data"
import ProductDetails from "./ProductDetails"
import { useCart } from "../providers/CartProvider";
 
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  margin-top:30px;
`



const Products = () => {
  const cartContext = useCart();
  console.log(cartContext.shoppingItems);
  return (
    <Container>
      {cartContext.shoppingItems.map((shoppingItems) => (
        <ProductDetails shoppingItems={shoppingItems}  />
      ))}
    </Container>
  );
}

export default Products
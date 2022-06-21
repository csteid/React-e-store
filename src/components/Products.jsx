import styled from "styled-components"
import { items } from "../data"
import ProductDetails from "./ProductDetails"
 
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  margin-top:30px;
`



const Products = () => {
  return (
    <Container>
      {items.map(item=>(
        <ProductDetails item = {item}/>
      ))}
      </Container>
  )
}

export default Products
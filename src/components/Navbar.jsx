import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  margin-bottom: 20px;
  margin-top:20px
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;  
  display: flex;
  align-items: center;
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items:center;
  margin-left: 25 px;
  padding: 5px;
  width:80%
`;
const Input = styled.input`
  border: none;
  width:90%;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
 font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display:flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size:14px;
  cursor: pointer;
  margin-left: 25px;
`;




const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input />
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>eShop</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={2} color="primary">
            <ShoppingCartOutlined/>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

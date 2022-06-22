import Home from "./pages/Home";
import React from "react";
// import ItemDetails from "./pages/ItemDetails";
// import Cart from "./pages/Cart";
import { CartProvider } from "./providers/CartProvider";

const App = () => {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
};

export default App;


// <ItemDetails />
// <Cart />
 
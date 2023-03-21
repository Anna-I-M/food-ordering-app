import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showHandler = () => {
    setCartIsShown(true);
  };

  const closeHandler = (props) => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && (<Cart onClose={closeHandler} />)}
      <Header onShowCart={showHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

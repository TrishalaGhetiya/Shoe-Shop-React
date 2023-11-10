import { useState } from "react";
import Header from "./components/Layout/Header";
import Shoes from "./components/Products/Shoes";
import CartProvider from "./store/CartProvider";
import Cart from './components/Cart/Cart';


function App() {
  const [cartIsShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  }

  const hideCartHandler = () => {
    setCartShown(false);
  }

  return (
    <CartProvider>
    <Header onShowCart={showCartHandler} />
    <main>
      <Shoes />
    </main>
    {cartIsShown && <Cart onClose={hideCartHandler} />}
    </CartProvider>
  );
}

export default App;

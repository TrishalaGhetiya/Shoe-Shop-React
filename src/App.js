import { useState } from "react";
import Header from "./components/Layout/Header";
import Shoes from "./components/Products/Shoes";


function App() {
  const [cartIsShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  }

  const hideCartHandler = () => {
    setCartShown(false);
  }

  return (
    <>
    <Header />
    <main>
      <Shoes />
    </main>
    </>
  );
}

export default App;

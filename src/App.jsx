import { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Open and close cart section
  const cartFunc = () => {
    setCartOpen(!cartOpen);
  };

  const mobileMenuFunc = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-Orange relative">
      <Header mobileMenuFunc={mobileMenuFunc} cartFunc={cartFunc}></Header>
      <Cart cartOpen={cartOpen}></Cart>
      <MobileMenu
        mobileMenuFunc={mobileMenuFunc}
        menuStat={mobileMenuOpen}
      ></MobileMenu>
    </div>
  );
}

export default App;

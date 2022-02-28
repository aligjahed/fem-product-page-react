import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import MobileGallery from "./components/MobileGallery";
import ProductData from "./components/ProductData";
import Gallery from "./components/Gallery";
import FloatingGallery from "./components/FloatingGallery";

// Gallery images
import pic1 from "./assets/images/image-product-1.jpg";
import pic2 from "./assets/images/image-product-2.jpg";
import pic3 from "./assets/images/image-product-3.jpg";
import pic4 from "./assets/images/image-product-4.jpg";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [gallery] = useState([pic1, pic2, pic3, pic4]);
  const [selGallery, setSelGallery] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  // Open and close cart section
  const cartFunc = () => {
    setCartOpen(!cartOpen);
  };

  // Open and close mobile menu
  const mobileMenuFunc = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // set gallery image
  const galleryFunc = (sel) => {
    setSelGallery(sel);
  };

  // change cart product count
  const addCart = (e) => {
    setCartCount(e);
  };

  const resetCart = () => {
    setCartCount(0);
  };

  return (
    <div className="min-h-screen relative">
      <Header
        mobileMenuFunc={mobileMenuFunc}
        cartFunc={cartFunc}
        cartCount={cartCount}
      ></Header>
      <Cart
        resetCart={resetCart}
        cartCount={cartCount}
        cartOpen={cartOpen}
      ></Cart>
      <MobileMenu
        mobileMenuFunc={mobileMenuFunc}
        menuStat={mobileMenuOpen}
      ></MobileMenu>
      <MobileGallery
        picture={gallery[selGallery]}
        currentPic={selGallery}
        galleryFunc={galleryFunc}
      ></MobileGallery>
      <div className="flex flex-row justify-between items-center lg:px-[215px] lg:py-[45px]">
        <ProductData addCart={addCart}></ProductData>
        <Gallery
          picture={gallery[selGallery]}
          currentPic={selGallery}
          galleryFunc={galleryFunc}
        ></Gallery>
      </div>
      <FloatingGallery></FloatingGallery>
    </div>
  );
}

export default App;

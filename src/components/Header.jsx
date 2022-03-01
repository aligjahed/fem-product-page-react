import menuIcon from "../assets/images/icon-menu.svg";
import logo from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";

const Header = ({ cartFunc, mobileMenuFunc, cartCount, reloadPage }) => {
  return (
    <header className=" px-[25px] py-[20px] lg:px-[165px] lg:py-[30px] bg-white  ">
      <div className="flex justify-between items-center relative">
        <div className="flex items-center">
          <img
            className="mr-[15px] h-[16px] lg:hidden cursor-pointer"
            src={menuIcon}
            alt="menuIcon"
            onClick={mobileMenuFunc}
          />
          <img
            className="h-[20px] lg:mr-[60px]  hover:cursor-pointer"
            src={logo}
            alt="logo"
            onClick={reloadPage}
          />
          <div className="space-x-[35px] text-Dark-grayish-blue hidden lg:flex  ">
            <div className="group relative">
              <a href="#">Collections</a>
              <div className="hidden h-1 w-full bg-Orange group-hover:block  absolute -bottom-[47px] "></div>
            </div>
            <div className="group relative">
              <a href="#">Men</a>
              <div className="hidden h-1 w-full bg-Orange group-hover:block  absolute -bottom-[47px] "></div>
            </div>
            <div className="group relative">
              <a href="#">Women</a>
              <div className="hidden h-1 w-full bg-Orange group-hover:block  absolute -bottom-[47px] "></div>
            </div>
            <div className="group relative">
              <a href="#">About</a>
              <div className="hidden h-1 w-full bg-Orange group-hover:block  absolute -bottom-[47px] "></div>
            </div>
            <div className="group relative">
              <a href="#">Contact</a>
              <div className="hidden h-1 w-full bg-Orange group-hover:block  absolute -bottom-[47px] "></div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <img
              className="mr-[22px] lg:mr-[45px] hover:cursor-pointer"
              src={cart}
              alt="shopping cart"
              onClick={cartFunc}
            />
            <div className={cartCount > 0 ? "cartCounter" : "hidden"}>
              <p className="absolute top-[-2px] right-[6px] text-[12px] text-white">
                {cartCount}
              </p>
            </div>
          </div>
          <img
            className="h-[25px] lg:h-[50px] hover:cursor-pointer hover:border-2 hover:rounded-[50%] hover:border-Orange"
            src={avatar}
            alt="avatar"
          />
        </div>
        <div className="absolute  -bottom-[35px] h-[1px] w-full bg-black  opacity-10 hidden lg:block"></div>
      </div>
    </header>
  );
};

export default Header;

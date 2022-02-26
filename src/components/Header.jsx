import menuIcon from "../assets/images/icon-menu.svg";
import logo from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";

const Header = () => {
  return (
    <header className=" px-[25px] py-[20px] lg:px-[165px] lg:py-[30px]  ">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="mr-[15px] h-[16px] lg:hidden"
            src={menuIcon}
            alt="menuIcon"
          />
          <img
            className="h-[20px] lg:mr-[60px]  hover:cursor-pointer"
            src={logo}
            alt="logo"
          />
          <div className="space-x-[35px] text-Dark-grayish-blue hidden lg:flex  ">
            <div className="group relative">
              <a href="#">Collections</a>
              <div className="hidden h-1 w-full bg-Orange group-hover:block  absolute -bottom-[35px] "></div>
            </div>
            <div className="group relative">
              <a href="#">Men</a>
              <div className="hidden h-1 w-full bg-Orange group-hover:block absolute -bottom-[35px]"></div>
            </div>
            <div className="group relative">
              <a href="#">Women</a>
              <div className="hidden h-1 w-full bg-Orange group-hover:block absolute -bottom-[35px]"></div>
            </div>
            <div className="group relative">
              <a href="#">About</a>
              <div className="hidden h-1 w-full bg-Orange group-hover:block absolute -bottom-[35px]"></div>
            </div>
            <div className="group relative">
              <a href="#">Contact</a>
              <div className="hidden h-1 w-full bg-Orange group-hover:block absolute -bottom-[35px]"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <img
            className="mr-[22px] lg:mr-[45px] hover:cursor-pointer"
            src={cart}
            alt="shopping cart"
          />
          <img
            className="h-[25px] lg:h-[50px] hover:cursor-pointer hover:border-2 hover:rounded-[50%] hover:border-Orange"
            src={avatar}
            alt="avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

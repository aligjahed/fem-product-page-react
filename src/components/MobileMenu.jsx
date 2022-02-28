import closeIcon from "../assets/images/icon-close.svg";

const MobileMenu = ({ menuStat, mobileMenuFunc }) => {
  return (
    <div
      className={
        menuStat ? "absolute top-0 bg-bg-black w-full h-full z-10" : "hidden"
      }
    >
      <section className="bg-white w-[65%] h-full p-[25px]">
        <img
          className="mb-[55px]"
          src={closeIcon}
          alt="closeMenuIcon"
          onClick={mobileMenuFunc}
        />
        <div className="flex flex-col font-bold space-y-[30px]">
          <a href="#">Collections</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </section>
    </div>
  );
};

export default MobileMenu;

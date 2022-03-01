import next from "../assets/images/icon-next.svg";
import previous from "../assets/images/icon-previous.svg";

const MobileGallery = ({ picture, currentPic, galleryFunc }) => {
  return (
    <div className="relative z-0  lg:hidden">
      <img
        className="h-[300px] w-full object-cover "
        src={picture}
        alt="gallery"
      />
      <div
        className="absolute top-[40%] right-[5%] flex justify-center items-center h-[40px] w-[40px] bg-white rounded-[50%] cursor-pointer"
        onClick={() => {
          currentPic !== 3 ? galleryFunc(currentPic + 1) : galleryFunc(0);
        }}
      >
        <img src={next} alt="next" />
      </div>
      <div
        className="absolute top-[40%] left-[5%] flex justify-center items-center h-[40px] w-[40px] bg-white rounded-[50%] cursor-pointer"
        onClick={() => {
          currentPic !== 0 ? galleryFunc(currentPic - 1) : galleryFunc(3);
        }}
      >
        <img src={previous} alt="previous" />
      </div>
    </div>
  );
};

export default MobileGallery;

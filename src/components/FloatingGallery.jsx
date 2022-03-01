import close from "../assets/images/icon-close.svg";
import thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";
import next from "../assets/images/icon-next.svg";
import previous from "../assets/images/icon-previous.svg";

const FloatingGallery = ({
  picture,
  currentPic,
  galleryFunc,
  openState,
  stateFunc,
}) => {
  return (
    <div className={openState ? "floatingGallery" : "hidden"}>
      <div className="flex justify-end w-full mb-[22px]">
        <img
          className="h-[22px] cursor-pointer"
          src={close}
          alt="close"
          onClick={stateFunc}
        />
      </div>
      <div className="relative">
        <img
          className="max-w-[550px] rounded-[14px] mb-[38px]"
          src={picture}
          alt="main pic"
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
      <div className="flex flex-row flex-wrap justify-evenly w-full">
        <img
          className={currentPic == 0 ? "thumbnailSel" : "thumbnail"}
          src={thumbnail1}
          alt="product 1"
          onClick={() => {
            galleryFunc(0);
          }}
        />
        <img
          className={currentPic == 1 ? "thumbnailSel" : "thumbnail"}
          src={thumbnail2}
          alt="product 2"
          onClick={() => {
            galleryFunc(1);
          }}
        />
        <img
          className={currentPic == 2 ? "thumbnailSel" : "thumbnail"}
          src={thumbnail3}
          alt="product 3"
          onClick={() => {
            galleryFunc(2);
          }}
        />
        <img
          className={currentPic == 3 ? "thumbnailSel" : "thumbnail"}
          src={thumbnail4}
          alt="product 4"
          onClick={() => {
            galleryFunc(3);
          }}
        />
      </div>
    </div>
  );
};

export default FloatingGallery;

import thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";

const Gallery = ({ picture, currentPic, galleryFunc, floatingGalleryFunc }) => {
  return (
    <div className="flex-col hidden lg:flex">
      <img
        className="w-[445px] mb-[30px] rounded-[14px] cursor-pointer"
        src={picture}
        alt="picture"
        onClick={floatingGalleryFunc}
      />
      <div className="flex flex-row flex-wrap justify-between">
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

export default Gallery;

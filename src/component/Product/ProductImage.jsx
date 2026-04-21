import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function ProductImage() {
  return (
    <div className="z-20 order-2 laptop:order-1 ">
      <div className="">
        <LazyLoadImage
          src="\product.jpeg"
          className=" w-[400px] h-[150px] rounded-2xl shadow-xl shadow-gray-300 object-cover hover:scale-[1.05] laptop:w-[600px] laptop:h-[350px] tablet:w-[600px] tablet:h-[250px]   "
          effect="blur"
        />
      </div>
    </div>
  );
}

export default ProductImage;

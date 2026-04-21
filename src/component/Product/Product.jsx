import Circle from "./Circle";
import ProductDev from "./ProductDev";
import ProductImage from "./ProductImage";

function Product() {
  return (
    <section className="w-full py-10 px-7 bg-white w-full laptop:py-20 laptop:px-20 ">
      <div className="flex flex-col gap-10 text-black relative">
        <div className="text-center flex flex-col gap-2 items-center laptop:gap-5">
          <h1 className="text-[#0A192F] text-3xl font-bold laptop:text-7xl">
            what we do
          </h1>
          <p className="text-gray-600 text-md w-auto laptop:text-2xl laptop:w-[1000px]">
            We design and deliver intelligent, resilient platforms that
            accelerate innovation and unlock measurable impact.
          </p>
        </div>
        <div className="flex flex-col gap-30 justify-normal items-center laptop:flex-row laptop:justify-between">
          <ProductDev />
          <ProductImage />
        </div>

        <Circle />
      </div>
    </section>
  );
}

export default Product;

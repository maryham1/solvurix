import Circle from "./Circle";
import ProductDev from "./ProductDev";
import ProductImage from "./ProductImage";
import { useInView } from "react-intersection-observer";

function Product() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <section
      ref={ref}
      className={`${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      } w-full py-10 px-7 bg-white laptop:py-20 laptop:px-20 tablet:px-15 tablet:py-15 transition-all duration-700`}
    >
      <div className="flex flex-col gap-10 text-black relative">
        <div className="text-center flex flex-col gap-2 items-center laptop:gap-5 tablet:gap-5">
          <h1 className="text-[#0A192F] text-3xl font-bold laptop:text-7xl tablet:text-5xl">
            what we do
          </h1>
          <p className="text-gray-600 text-md w-auto laptop:text-2xl laptop:w-[1000px] tablet:text-xl ">
            We design and deliver intelligent, resilient platforms that
            accelerate innovation and unlock measurable impact.
          </p>
        </div>
        <div className="flex flex-col gap-30 justify-normal items-center laptop:flex-row laptop:justify-between ">
          <ProductDev />
          <ProductImage />
        </div>

        <Circle />
      </div>
    </section>
  );
}

export default Product;

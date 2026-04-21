import Button from "./Button";
import Powered from "./Powered";
import { FaInfoCircle } from "react-icons/fa";
import { LuPackage } from "react-icons/lu";
function Intro() {
  return (
    <div className="text-white w-auto flex flex-col items-center justify-center gap-7 laptop:gap-10 laptop:items-start delay-200 laptop:w-[690px] laptop:justify-normal tablet:gap-7 tablet:items-start tablet:w-[500px] tablet:justify-normal animate-floatIn transition-all duration-700 ease-in-out">
      <h1 className="font-extrabold text-4xl space-y-5 text-center w-[230px] laptop:text-7xl laptop:w-auto laptop:text-left tablet:text-5xl tablet:w-auto tablet:text-left">
        Building the{" "}
        <span className="text-blue-600 ">Future of Technology</span>
      </h1>
      <p className="text-[15px] laptop:text-[27px] tablet:text-[20px]">
        Creating intelligent, future-ready solutions for real-world challenges.
      </p>
      <p className="text-sm laptop:text-xl tablet:text-lg">
        Innovate. Build. Solve.
      </p>
      <div className="flex  flex-col gap-5 laptop:flex-row laptop:gap-10 tablet:flex-row  ">
        <Button type="blueBg" icon={<LuPackage />}>
          explore our products
        </Button>
        <Button type="noneBg" icon={<FaInfoCircle />}>
          our story
        </Button>
      </div>
      <div className="w-full  border-b border-gray-400"></div>
      <p className="border-t-0 border-r-0 border-l-0 border-b-gray-600 border-[0.5px] "></p>
      <Powered />
    </div>
  );
}

export default Intro;

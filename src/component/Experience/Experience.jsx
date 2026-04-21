import Button from "../Herosection/Button";
import { LuPackage } from "react-icons/lu";
import { FaComment } from "react-icons/fa";

function Experience() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-[#0A192F] w-full  py-10 px-7 laptop:py-20 laptop:px-20 ">
      <div className="flex flex-col justify-center items-center gap-7 laptop:gap-10">
        <div className="text-center space-y-5 laptop:space-y-10">
          <h1 className="text-white font-bold text-2xl capitalize laptop:text-6xl">
            Ready to Experience the Future?
          </h1>
          <p className="text-md text-white laptop:text-2xl">
            Discover how Solvurix products can transform your business
            operations.
          </p>
        </div>
        <div className="flex flex-col gap-7 laptop:flex-row laptop:gap-10">
          <Button type="white" icon={<LuPackage />}>
            Explore products
          </Button>
          <Button type="borderWhite" icon={<FaComment />}>
            Talk to our team
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Experience;

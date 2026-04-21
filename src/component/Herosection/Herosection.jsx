import CompanyLogo from "./CompanyLogo";
import Intro from "./Intro";

function Herosection() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-[#0A192F] px-7 py-35 w-full  laptop:bg-[#06152d] laptop:bg-none  laptop:px-20 laptop:py-40">
      <div className="flex justify-normal items-center laptop:justify-between">
        <Intro />
        <CompanyLogo />
      </div>
    </section>
  );
}

export default Herosection;

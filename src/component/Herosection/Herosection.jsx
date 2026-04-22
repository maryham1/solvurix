import CompanyLogo from "./CompanyLogo";
import Intro from "./Intro";

function Herosection() {
  return (
    <section className=" overflow-x-hidden  bg-[#0A192F] px-7 py-35 w-full   tablet:px-15 tablet-py-20  laptop:px-20 laptop:py-40">
      <div className="flex justify-normal items-center laptop:justify-between">
        <Intro />
        <CompanyLogo />
      </div>
    </section>
  );
}

export default Herosection;

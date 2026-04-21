import Contact from "./Contact";
import Links from "./Links";
import Policy from "./Policy";
import Resources from "./Resources";
import Solvurix from "./Solvurix";

function Footer() {
  return (
    <section className="relative bg-[#0A192F] px-7 flex flex-col gap-10  py-10 w-full laptop:py-20 laptop:px-20 tablet:px-15 tablet:py-15">
      <div className="flex flex-col justify-between gap-10 w-full items-start laptop:flex-row">
        <Solvurix />
        <Links />
        <Resources />
        <Contact />
      </div>
      <div className="w-screen relative left-1/2 -translate-x-1/2 border-b border-gray-400"></div>
      <Policy />
    </section>
  );
}

export default Footer;

import { useInView } from "react-intersection-observer";
import Contact from "./Contact";
import Links from "./Links";
import Policy from "./Policy";
import Resources from "./Resources";
import Solvurix from "./Solvurix";

function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      className={` ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 "
      } transition-all duration-700 ease-out relative bg-[#0A192F] px-7 flex flex-col gap-10  py-10 w-full laptop:py-20 laptop:px-20 tablet:px-15 tablet:py-15`}
      ref={ref}
    >
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

import {
  BiGitBranch,
  BiShieldQuarter,
  BiSolidCloudUpload,
} from "react-icons/bi";

import { MdLightbulb, MdLightbulbOutline } from "react-icons/md";
import { useInView } from "react-intersection-observer";

const technology = [
  {
    name: "Artificial Intelligence",
    info: "Machine learning, deep learning, and intelligent automation",
    icon: <BiShieldQuarter className="text-5xl text-white" />,
  },
  {
    name: "Cloud-Native",
    info: "WScalable, resilient architectures built for modern infrastructure",
    icon: <BiSolidCloudUpload className="text-5xl text-blue-600" />,
  },
  {
    name: "API-First Design",
    info: "Flexible, modular platforms that integrate seamlessly",
    icon: <BiGitBranch className="text-5xl text-blue-600" />,
  },
  {
    name: "Enterprise Security",
    info: "Built-in security, compliance, and data protection",
    icon: <BiShieldQuarter className="text-5xl text-blue-600" />,
  },
];
function Technology() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      className={` ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 "
      } transition-all duration-700 ease-out bg-blue-50/50  py-10 px-7 w-full laptop:px-2 laptop:py-20 tablet:px-15 tablet:py-15`}
      ref={ref}
    >
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="text-center space-y-5 laptop:space-y-10 tablet:space-y-7">
          <h1 className="text-[#0A192F] font-bold text-2xl capitalize laptop:text-6xl tablet:text-3xl">
            our technology focus
          </h1>
          <p className="text-md text-gray-600 laptop:text-2xl tablet:text-xl">
            Leveraging cutting-edge technologies to build tomorrow's solutions
          </p>
        </div>
        <div className="flex flex-col gap-10 laptop:flex-row tablet:gap-7">
          {technology.map((tech) => (
            <div
              className={` ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20 "
              } transition-all duration-700 ease-out flex flex-col gap-3 justify-center items-center m-auto rounded-2xl  laptop:gap-5 tablet:gap-5`}
              ref={ref}
            >
              <figure className="bg-white p-2 w-[100px] h-[100px] rounded-2xl flex items-center justify-center shadow-md hover:scale-[1.1]">
                {tech.icon}
              </figure>
              <h1 className="font-semibold text-lg laptop:text-2xl tablet:text-2xl">
                {tech.name}
              </h1>
              <p className="text-gray-600 text-sm text-center laptop:text-lg tablet:text-lg">
                {tech.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technology;

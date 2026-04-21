import { BiCode, BiCompass } from "react-icons/bi";
import { FiRefreshCw } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

const consults = [
  {
    topic: "Technology Advisory",
    info: "Strategic evaluation of platforms, tools, and modernization paths.",
    icon: <BiCompass className="text-black text-3xl" />,
  },
  {
    topic: "Custom Development",
    info: "Tailored engineering for unique workflows & domain challenges.",
    icon: <BiCode className="text-black text-3xl" />,
  },
  {
    topic: "Digital Transformation",
    info: "End-to-end modernization: automation, integration, observability.",
    icon: <FiRefreshCw className="text-black text-3xl" />,
  },
];

function ConsultStrategy() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      className={`${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 "
      } transition-all duration-700 ease-out space-y-3 w-auto order-1 laptop:order-2 laptop:w-[800px] laptop:space-y-7 tablet:space-y-5`}
      ref={ref}
    >
      <div className="flex gap-2 items-center pl-5">
        <div className="bg-black  w-[10px] h-[10px] rounded-full"></div>
        <h4 className=" text-black uppercase text-sm laptop:text-lg tablet:text-lg">
          secondary Services
        </h4>
      </div>
      <p className="text-black capitalize text-3xl font-semibold laptop:text-4xl animate-radialColor transition-all duration-300 ease-in-out">
        Strategic Consulting
      </p>
      <p className="text-md text-gray-600 laptop:text-[22px] tablet:text-[20px]">
        We partner with teams to navigate transformation, modernize stacks, and
        architect platforms that accelerate strategic outcomes.
      </p>
      <ul className="flex flex-col gap-5 pl-0 laptop:pl-10 laptop:gap-7">
        {consults.map((consult) => (
          <li className="flex gap-6 items-center ">
            {consult.icon}
            <div className="">
              <h4 className="font-semibold text-sm  laptop:text-xl tablet:text-lg">
                {consult.topic}
              </h4>
              <p className="text-gray-600 text-sm laptop:text-lg tablet:text-lg">
                {consult.info}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-lg font-semibold cursor-pointer laptop:text-xl">
        Discuss Roadmap &rarr;
      </p>
    </div>
  );
}

export default ConsultStrategy;

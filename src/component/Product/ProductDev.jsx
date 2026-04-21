import { FaBrain } from "react-icons/fa";
import { HiChevronDoubleRight } from "react-icons/hi";
import { LuBrainCircuit, LuLayers } from "react-icons/lu";

const tech = [
  {
    name: "AI-Driven Platforms",
    info: "Adaptive intelligence powered by ML, NLP, and automation pipelines.",
    icon: <FaBrain className="text-blue-600 text-2xl laptop:text-3xl" />,
  },
  {
    name: "Scalable Software Solutions",
    info: "Cloud-native, modular architectures built for performance & growth.",
    icon: <LuLayers className="text-blue-600 text-2xl laptop:text-3xl" />,
  },
  {
    name: "Future-Ready Technology",
    info: "Designed with evolution paths: extensible APIs, automation hooks, resilience.",
    icon: (
      <HiChevronDoubleRight className="text-blue-600 text-2xl laptop:text-3xl" />
    ),
  },
];

function ProductDev() {
  return (
    <div className="space-y-3 w-auto laptop:w-[800px] laptop:space-y-7  tablet:space-y-5">
      <div className="flex gap-1 items-center pl-5">
        <div className="bg-blue-600  w-[10px] h-[10px] rounded-full"></div>
        <h4 className=" text-blue-600 uppercase text-sm laptop:text-lg tablet:text-md">
          primary focus
        </h4>
      </div>
      <p className="text-black capitalize text-2xl font-semibold laptop:text-4xl tablet:text-3xl">
        product development & innovation
      </p>
      <p className="text-sm text-gray-600 laptop:text-[22px] tablet:text-[20px]">
        We craft future-ready digital products: AI platforms, automation suites,
        and enterprise systems engineered for sustained growth and adaptability.
      </p>
      <ul className="flex flex-col gap-5 pl-0 laptop:pl-10 laptop:gap-7 tablet:gap-5">
        {tech.map((th) => (
          <li className="flex gap-5 items-center laptop:gap-6">
            {th.icon}
            <div className="">
              <h4 className="font-semibold text-sm  laptop:text-xl tablet:text-lg">
                {th.name}
              </h4>
              <p className="text-gray-600 text-sm laptop:text-lg tablet:text-lg">
                {th.info}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductDev;

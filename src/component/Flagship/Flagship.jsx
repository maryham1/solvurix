import { FaBrain, FaCloud, FaCog } from "react-icons/fa";
import FlagList from "./FlagList";
import LearnMoreBtn from "./LearnMoreBtn";
import { useInView } from "react-intersection-observer";

const flagships = [
  {
    categoryName: "flagship product",
    name: "AI Analytics Engine",
    info: "Advanced AI-powered analytics platform with machine learning models, predictive insights, and natural language processing.",
    icon: <FaBrain className="text-3xl text-white laptop:text-5xl" />,
    categoryList: [
      "Machine learning model",
      "Predictive analytics",
      "Real-time insights",
    ],
  },
  {
    categoryName: "cloud automation",
    name: "CloudOps Platform",
    info: "Intelligent cloud orchestration platform with auto-scaling, cost optimization, and multi-cloud management.",
    icon: <FaCloud className="text-3xl text-white laptop:text-5xl" />,
    categoryList: [
      "Auto-scaling & optimization",
      "Multi-cloud orchestration",
      "Real-time monitoring",
    ],
  },
  {
    categoryName: " automation",
    name: "Enterprise Automation",
    info: "Intelligent workflow automation platform that streamlines operations and eliminates manual processes.",
    icon: <FaCog className="text-3xl text-white laptop:text-5xl" />,
    categoryList: [
      "Workflow automation",
      "Process intelligence",
      "Integration APIs",
    ],
  },
];
function Flagship() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      className={` ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 "
      } transition-all duration-700 ease-out bg-gradient-to-r from-white to-blue-50/50  py-10 px-7 w-full laptop:px-20 laptop:py-20 tablet:px-15 tablet:py-15`}
      ref={ref}
    >
      <div className="flex flex-col justify-center items-center gap-10 laptop:gap-15">
        <div className="text-center space-y-5 laptop:space-y-10 laptop:space-y-7">
          <h1 className="text-[#0A192F] font-bold text-2xl laptop:text-6xl tablet:text-3xl">
            Our Flagship Products
          </h1>
          <p className="text-md text-gray-600 laptop:text-2xl tablet:text-xl">
            Intelligent platforms built to transform how businesses operate
          </p>
        </div>
        <div className="flex flex-col gap-10  laptop:flex-row">
          {flagships.map((flg) => (
            <div
              className=" transition-all duration-500  group relative bg-white p-6 flex flex-col justify-center items-center gap-4 laptop:p-8 laptop:gap-7
                w-auto h-auto m-auto rounded-2xl shadow-lg hover:scale-[1.05] laptop:w-[400px] tablet:w-[480px]"
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 
             w-0 h-1
             bg-gradient-to-r from-blue-600 to-[#0A192F]
             transition-all duration-300 
             group-hover:w-full"
              />
              <figure className="transition-all duration-500 bg-gradient-to-r from-blue-600 to-[#0A192F] p-2 w-[70px] h-[70px] laptop:w-[100px] laptop:h-[100px] tablet:w-[85px] tablet:h-[85px] rounded-2xl flex items-center justify-center group-hover:scale-[1.07] group-hover:rotate-12   ">
                {flg.icon}
              </figure>
              <div className="flex gap-2 border py-1 px-6 border-gray-200 rounded-full border-[1px] items-center">
                <div className="w-[7px] h-[7px] rounded-full  p-1 bg-blue-600 animate-radialColor transition-all duration-300 ease-in-out"></div>
                <p className="text-blue-600 uppercase text-sm font-semibold">
                  {flg.categoryName}
                </p>
              </div>
              <h1 className="font-semibold text-blue-600  text-xl laptop:text-2xl tablet:text-2xl">
                {flg.name}
              </h1>
              <p className="text-gray-600 text-md text-center laptop:text-lg tablet:text-lg">
                {flg.info}
              </p>
              <FlagList flg={flg} />
              <LearnMoreBtn />
            </div>
          ))}
        </div>
        <button className="border border-[3px] border-black rounded-xl px-8 py-4 w-auto laptop:w-[280px] tablet:w-[280px] tablet:px-5 tablet:py-5 laptop:px-5 laptop:py-5">
          <a className="text-md capitalize font-semibold outline-0 laptop:tex-xl tablet:text-xl">
            view all product &rarr;
          </a>
        </button>
      </div>
    </section>
  );
}

export default Flagship;

import { FaHammer, FaPuzzlePiece } from "react-icons/fa";
import { MdLightbulb, MdLightbulbOutline } from "react-icons/md";

const principles = [
  {
    topic: "Innovate",
    info: "We push the boundaries of what's possible, combining technical expertise with creative thinking to develop breakthrough solutions.",
    icon: <MdLightbulb className="text-4xl text-white" />,
  },
  {
    topic: "Build",
    info: "We create robust, scalable products that stand the test of time, crafted with precision and attention to detail.",
    icon: <FaHammer className="text-4xl text-white" />,
  },
  {
    topic: "Solve",
    info: "We focus on real-world impact, delivering solutions that address today's challenges and anticipate tomorrow's needs.",
    icon: <FaPuzzlePiece className="text-4xl text-white" />,
  },
];
function Core() {
  return (
    <section className="bg-blue-50/50  py-10 px-7 w-full laptop:py-20 laptop:px-20">
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="text-center">
          <h1 className="text-[#0A192F] font-bold text-3xl laptop:text-6xl">
            Our Core Principles
          </h1>
          <p className="text-lg text-gray-600 laptop:text-2xl">
            Guided by innovation, excellence, and a commitment to solving real
            problems
          </p>
        </div>
        <div className="flex flex-col gap-10 laptop:flex-row">
          {principles.map((prp) => (
            <div className="bg-white p-8 space-y-5 w-auto h-auto m-auto rounded-2xl shadow-lg laptop:w-[460px] laptop:h-[320px] ">
              <figure className="bg-gradient-to-r from-blue-600 to-[#0A192F] p-2 w-[70px] h-[70px] rounded-2xl flex items-center justify-center">
                {prp.icon}
              </figure>
              <h1 className="font-semibold text-xl laptop:text-2xl">
                {prp.topic}
              </h1>
              <p className="text-gray-600 text-mddptop:text-lg">{prp.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Core;

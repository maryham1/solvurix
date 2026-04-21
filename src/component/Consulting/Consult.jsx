import { useInView } from "react-intersection-observer";
import ConsultingImage from "./ConsultingImage";
import ConsultStrategy from "./ConsultStrategy";

function Consult() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <section
      className={`${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      } transition-all duration-700 ease-out w-full py-10 px-7 bg-white mt-20 laptop:px-20 laptop:py-20 tablet:px-15 tablet:px-15 laptop:mt-72 tablet:mt-[550px]`}
      ref={ref}
    >
      <div className="flex flex-col gap-15 justify-normal items-center laptop:flex-row laptop:justify-between">
        <ConsultingImage />
        <ConsultStrategy />
      </div>
    </section>
  );
}

export default Consult;

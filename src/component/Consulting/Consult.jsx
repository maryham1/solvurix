import ConsultingImage from "./ConsultingImage";
import ConsultStrategy from "./ConsultStrategy";

function Consult() {
  return (
    <section className="w-full py-10 px-7 bg-white mt-20 laptop:px-20 py-20 laptop:mt-72">
      <div className="flex flex-col gap-15 justify-normal items-center laptop:flex-row laptop:justify-between">
        <ConsultingImage />
        <ConsultStrategy />
      </div>
    </section>
  );
}

export default Consult;

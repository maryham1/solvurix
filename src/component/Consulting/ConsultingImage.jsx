import { useInView } from "react-intersection-observer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function ConsultingImage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="z-20 order-2 laptop:-1">
      <div
        className={`${
          inView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20 animate-slide-in-left"
        } transition-all duration-700 ease-out`}
        ref={ref}
      >
        <LazyLoadImage
          src="\strategic_consulting.jpeg"
          className="w-[600px] h-[350px] rounded-3xl shadow-xl shadow-gray-300 object-cover hover:scale-[1.05] tablet:w-[650px] tablet:h-[250px] tablet:h-[350px]"
          effect="blur"
        />
      </div>
    </div>
  );
}

export default ConsultingImage;

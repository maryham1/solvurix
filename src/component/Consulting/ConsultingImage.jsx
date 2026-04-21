import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function ConsultingImage() {
  return (
    <div className="z-20 order-2 laptop:-1">
      <LazyLoadImage
        src="\strategic_consulting.jpeg"
        className="w-[600px] h-[350px] rounded-3xl shadow-xl shadow-gray-300 object-cover hover:scale-[1.05] tablet:w-[650px] tablet:h-[250px] tablet:h-[350px]"
        effect="blur"
      />
    </div>
  );
}

export default ConsultingImage;

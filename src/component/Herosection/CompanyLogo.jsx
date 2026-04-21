import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function CompanyLogo() {
  return (
    <div className="hidden relative  items-center justify-center laptop:flex tablet:flex">
      <div className="absolute w-full h-full bg-radial-[at_center] from-blue-500/30  to-blue-600/5 rounded-full blur-3xl z-10 pointer-events-none animate-radial transition-all duration-700 ease-in-out"></div>
      <LazyLoadImage
        src="/solvurix-company-logo.png"
        alt="company-logo"
        className="laptop:w-[600px] laptop:h-[600px] tablet:w-[400px] tablet:w-[400px] relative z-10 animate-float1 transition-all duration-700 ease-in-out duration-700 "
      />
    </div>
  );
}

export default CompanyLogo;

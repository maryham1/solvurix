import { LiaLinkedin } from "react-icons/lia";
import Logo from "../../UI/Logo";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

function Solvurix() {
  return (
    <div className="text-white w-auto space-y-3 laptop:w-[330px]">
      <div className="flex gap-2 items-center  ">
        <img
          src="\solvurix-company-logo.png"
          className="w-[40px] h-[40px] laptop:w-[50px] laptop:w-[50px]"
        />
        <h1 className="text-xl uppercase font-semibold laptop:text-2xl">
          solvurix
        </h1>
      </div>

      <p className="text-gray-300 text-md laptop:text-lg">
        Empowering People and businesses through innovative technology solutions
        and digital transformation.
      </p>
      <div className="flex gap-5 laptop:gap">
        <figure className="bg-gray-800/50 p-2 flex justify-center items-center w-[40px] h-[40px] rounded-md hover:bg-blue-600">
          <a
            href="https://www.linkedin.com/company/solvurix/"
            className="cursor-pointer"
          >
            <LiaLinkedin className="text-white text-2xl" />
          </a>
        </figure>
        <figure className="bg-gray-800/50 p-2 flex justify-center items-center w-[40px] h-[40px] rounded-md hover:bg-blue-600">
          <></>
        </figure>
        <figure className="bg-gray-800/50 p-2 flex justify-center items-center w-[40px] h-[40px] rounded-md">
          <a
            href="https://web.facebook.com/people/Solvurix/61587431567979/?_rdc=1&_rdr#"
            className="cursor-pointer"
          >
            <FaFacebook className="text-white text-2xl" />
          </a>
        </figure>
        <figure className="bg-gray-800/50 p-2 flex justify-center items-center w-[40px] h-[40px] rounded-md hover:bg-blue-600">
          <a
            href="https://www.instagram.com/solvurix"
            className="cursor-pointer"
          >
            <FaInstagramSquare className="text-white text-2xl" />
          </a>
        </figure>
      </div>
    </div>
  );
}

export default Solvurix;

import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div className="space-y-5">
      <h4 className="text-white text-xl laptop:text-2xl capitalize font-semibold tablet:text-2xl">
        Contact Us
      </h4>
      <figure className="flex gap-2 items-center">
        <MdEmail className="text-blue-600 text-xl laptop:text-2xl tablet:text-2xl" />
        <a
          href=""
          className="text-gray-300 text-md laptop:text-lg hover:text-blue-600 tablet:text-lg"
        >
          info@solvurix.co.uk
        </a>
      </figure>
      <figure className="flex gap-2 items-center">
        <FaMapMarkerAlt className="text-xl laptop:text-2xl text-white tablet:text-2xl" />
        <a
          href=""
          className="text-gray-300 text-md laptop:text-lg hover:text-blue-600 tablet:text-lg"
        >
          5 Brayford Square London, E1 0SG
        </a>
      </figure>
    </div>
  );
}

export default Contact;

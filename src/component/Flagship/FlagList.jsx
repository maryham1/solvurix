import { FaCheck } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

function FlagList({ flg }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <ul className="flex items-start flex-col p-0 w-full space-y-5 text-gray-600">
      {flg.categoryList.map((li) => (
        <li className={`${inView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20 "
        } transition-all duration-700 ease-out`} ref={ref}>
          <figure className="flex gap-3 ">
            <FaCheck className="text-green-700 text-sm" /> {li}
          </figure>
        </li>
      ))}
    </ul>
  );
}

export default FlagList;

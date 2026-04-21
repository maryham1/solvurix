import { FaCheck } from "react-icons/fa";

function FlagList({ flg }) {
  return (
    <ul className="flex items-start flex-col p-0 w-full space-y-5 text-gray-600">
      {flg.categoryList.map((li) => (
        <li>
          <figure className="flex gap-3 ">
            <FaCheck className="text-green-700 text-sm" /> {li}
          </figure>
        </li>
      ))}
    </ul>
  );
}

export default FlagList;

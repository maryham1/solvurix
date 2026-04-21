import { HiBars3, HiXMark } from "react-icons/hi2";

function Menu({ showMenu, setShowMenu }) {
  return (
    <button
      className="block laptop:hidden"
      onClick={(e) => setShowMenu(!showMenu)}
    >
      <span>
        {showMenu ? (
          <HiXMark className="text-3xl text-white" />
        ) : (
          <HiBars3 className="text-3xl text-white" />
        )}
      </span>
    </button>
  );
}

export default Menu;

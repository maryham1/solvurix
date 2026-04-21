function NavList({ showMenu, setShowMenu }) {
  return (
    <ul
      className={`${
        showMenu
          ? "flex flex-col absolute top-20 shadow-md right-0 bg-[#0A192F] p-10 w-full  shadow-lg "
          : "hidden"
      } 
    text-xl
    
    laptop:flex laptop:flex-row laptop:relative laptop:bg-transparent  laptop:w-auto
    z-50 items-start laptop:items-center justify-between gap-5
  `}
    >
      <div className="w-full  border-b border-gray-400 laptop:hidden"></div>
      <li
        onClick={(e) => {
          e.preventDefault();
          setShowMenu(false);
        }}
      >
        <a className="hover:text-blue-600 cursor-pointer">Home</a>
      </li>
      <li
        onClick={(e) => {
          e.preventDefault();
          setShowMenu(false);
        }}
      >
        <a className="hover:text-blue-600 cursor-pointer">About</a>
      </li>
      <li
        onClick={(e) => {
          e.preventDefault();
          setShowMenu(false);
        }}
      >
        <a className="hover:text-blue-600 cursor-pointer">Solution</a>
      </li>
      <li
        onClick={(e) => {
          e.preventDefault();
          setShowMenu(false);
        }}
      >
        <a className="hover:text-blue-600 cursor-pointer">Product</a>
      </li>
      <li
        className="bg-blue-600 py-3 px-6 text-center rounded-lg hover:text-blue-700"
        onClick={(e) => {
          e.preventDefault();
          setShowMenu(false);
        }}
      >
        <a className="cursor-pointer ">Get in Touch</a>
      </li>
    </ul>
  );
}

export default NavList;

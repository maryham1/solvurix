import { useState } from "react";
import Logo from "../../UI/Logo";
import Menu from "./Menu";
import NavList from "./NavList";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="bg-[#0A192F]   fixed left-0 top-0 w-full z-50 py-5 px-3 flex items-center justify-between text-white shadow-md laptop:px-15 laptop:py-5 tablet:px-10">
      <Logo />
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
      <NavList showMenu={showMenu} setShowMenu={setShowMenu} />
    </nav>
  );
}

export default Navbar;

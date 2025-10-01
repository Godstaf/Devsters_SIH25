import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/themeSlice";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import SideBar_sm from "./SideBar_sm";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <header className="fixed top-0 z-50 bg-white shadow-md w-full">
      <div className="w-full flex items-center justify-between px-3 md:px-6 py-4 relative">
        <div className="flex items-center gap-3">
          <SideBar_sm />
          <a className="text-2xl font-bold text-gray-900" href="/home">
            Profolio
          </a>
        </div>
        <div className="flex items-center gap-6">
          <div>
              <IoSunnyOutline
                size={25}
                onClick={() => dispatch(toggleTheme())}
              />
          </div>

        
          <a
            className="rounded-lg bg-[#6C47FF] px-4 py-2 text-white hover:bg-[#6C47FF]/80"
            href="/login"
          >
            LogIn
          </a>
        </div>
        {isMobileMenuOpen && (
          <div
            id="mobile-nav-popover"
            className="sm:hidden absolute right-3 top-[64px] w-48 rounded-lg border bg-white shadow-lg"
            role="menu"
          >
            <div className="flex flex-col p-2">
              <a
                className="px-3 py-2 rounded hover:bg-gray-100 text-gray-700"
                href="/sign-up"
                role="menuitem"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                LogIn
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import {
  Cart,
  DropdownArrow,
  HeaderLogo,
  Like,
  Profile,
  Search,
  SmallLogo,
  User,
} from "../utils/Icons";
import Input from "../components/common/Input";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = (menuName) => {
    setOpenDropdown((prev) => (prev === menuName ? null : menuName));
  };

  const handleDropdownLinkClick = () => setOpenDropdown(null);

  const toggleNavbar = () => {
    setMenuOpen((prev) => !prev);
    document.body.classList.toggle("overflow-hidden", !menuOpen);
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const linkClick = () => {
    setMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isDropdownToggle = event.target.closest(".dropdown-toggle");
      const isDropdownMenu = event.target.closest(".dropdown-menu");
      if (!isDropdownToggle && !isDropdownMenu) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const underlineClass =
    "relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full";

  return (
    <div className="w-full mx-auto max-w-[1920px]">
      <div className="bg-[#112D49] h-full">
        <div className="relative z-20 max-w-[1440px] mx-auto">
          <div className="mx-auto py-[13px] lg:py-5 lg:hidden px-6 max-w-[1246px] flex items-center justify-between">
            <NavLink to="/" className="header-logo">
              <SmallLogo />
            </NavLink>
            <div className="size-[30px] pt-[10px]">
              <div
                onClick={toggleNavbar}
                className="max-w-[18px] z-50 relative cursor-pointer lg:hidden flex flex-col justify-center gap-[5px]"
              >
                <span
                  className={`rounded-3xl bg-white transition-transform duration-300 ease-in-out ${
                    menuOpen
                      ? "rotate-45 translate-y-2 h-1"
                      : "w-[9.77px] h-[1px] ml-auto"
                  }`}
                ></span>
                <span
                  className={`rounded-3xl mx-auto bg-white transition-transform duration-300 ease-in-out ${
                    menuOpen ? "opacity-0 h-1" : "w-[18px] h-[1px] "
                  }`}
                ></span>
                <span
                  className={`rounded-3xl bg-white transition-transform duration-300 ease-in-out ${
                    menuOpen
                      ? "-rotate-45 -translate-y-2.5 h-1"
                      : " w-[9.77px] h-[1px] "
                  }`}
                ></span>
              </div>
            </div>
          </div>
          <NavLink
            to="/"
            className="absolute ml-auto left-[10px] xl:left-[94px] max-lg:hidden max-w-[40px] top-[31px]"
          >
            <HeaderLogo />
          </NavLink>
          <ul
            id="nav-name"
            className={`transition-all duration-300 ease-in-out list-none flex justify-center items-center lg:max-w-[974px] ml-auto xl:mr-[100px] nav-link ${
              menuOpen ? "show-navbar" : "hidden lg:flex"
            }`}
          >
            <li>
              <ul className="list-unstyled flex items-center max-lg:flex-col max-lg:text-center gap-4 lg:gap-8 relative py-5">
                <li>
                  <a
                    onClick={linkClick}
                    className={`leading-[150%] text-white ${underlineClass}`}
                    href="#Categories"
                  >
                    Categories
                  </a>
                </li>
                <li className="relative">
                  <button
                    type="button"
                    className={`leading-[150%] text-white flex items-center gap-2 text-nowrap  dropdown-toggle ${underlineClass}`}
                    onClick={() => toggleDropdown("pcProducts")}
                  >
                    PC Products <DropdownArrow />
                  </button>
                  {openDropdown === "pcProducts" && (
                    <div className="dropdown-menu absolute top-full -left-[60px] mt-2 bg-white shadow-[0px_0px_11.4px_0px_#73A4E033] rounded-[8px] p-4 w-[251px] z-10">
                      <ul>
                        <li>
                          <a
                            onClick={handleDropdownLinkClick}
                            href="#"
                            className="text-[#112D49] opacity-80 block py-1"
                          >
                            Reference Earlier Examples
                          </a>
                        </li>
                        <hr className="my-3 border-black" />
                        <li>
                          <a
                            onClick={handleDropdownLinkClick}
                            href="#"
                            className="text-[#112D49] opacity-80 block py-1"
                          >
                            Standard PC Components
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li className="relative">
                  <button
                    type="button"
                    className={`leading-[150%] text-white flex items-center gap-2 dropdown-toggle ${underlineClass}`}
                    onClick={() => toggleDropdown("services")}
                  >
                    Services <DropdownArrow />
                  </button>
                  {openDropdown === "services" && (
                    <div className="dropdown-menu absolute top-full -left-[60px] mt-2 bg-white shadow-[0px_0px_11.4px_0px_#73A4E033] rounded-[8px] p-4 w-[242px] z-10">
                      <ul>
                        <li>
                          <a
                            onClick={handleDropdownLinkClick}
                            href="#"
                            className="text-[#112D49] opacity-80 block py-1"
                          >
                            DIY Services
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li className="relative">
                  <button
                    type="button"
                    className={`leading-[150%] text-white flex items-center gap-2 dropdown-toggle ${underlineClass}`}
                    onClick={() => toggleDropdown("support")}
                  >
                    Support <DropdownArrow />
                  </button>
                  {openDropdown === "support" && (
                    <div className="dropdown-menu absolute top-full -left-[60px] mt-2 bg-white shadow rounded-[8px] p-4 w-[251px] z-10">
                      <ul>
                        <li>
                          <a
                            onClick={handleDropdownLinkClick}
                            href="#"
                            className="text-[#112D49] opacity-80 block py-1"
                          >
                            FAQ’s
                          </a>
                        </li>
                        <hr className="my-3 border-black" />
                        <li>
                          <a
                            onClick={handleDropdownLinkClick}
                            href="#"
                            className="text-[#112D49] opacity-80 block py-1"
                          >
                            Returns
                          </a>
                        </li>
                        <hr className="my-3 border-black" />
                        <li>
                          <a
                            onClick={handleDropdownLinkClick}
                            href="#"
                            className="text-[#112D49] opacity-80 block py-1"
                          >
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li>
                  <a
                    onClick={linkClick}
                    className={`leading-[150%] text-white ${underlineClass}`}
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    onClick={linkClick}
                    className={`leading-[150%] text-white ${underlineClass}`}
                    href="#blog"
                  >
                    Blog
                  </a>
                </li>
                <li className="min-[1100px]:mr-[52px]">
                  <a
                    onClick={linkClick}
                    className={`leading-[150%] text-white ${underlineClass}`}
                    href="#Contact"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-9 w-full max-w-[285px]">
                    <div className="flex gap-3.5 items-center">
                      <a onClick={linkClick} href="">
                        <User />
                      </a>
                      <div className="h-10 border border-[#D9D9D9] w-0" />
                      <a onClick={linkClick} href="">
                        <Like />
                      </a>
                      <div className="h-10 border border-[#D9D9D9] w-0" />
                      <NavLink onClick={linkClick} to="/addToCart">
                        <Cart />
                      </NavLink>
                    </div>
                    <a
                      className="min-w-10 h-10 rounded-full flex cursor-pointer items-end justify-center overflow-hidden bg-white"
                      onClick={linkClick}
                      href=""
                    >
                      <Profile />
                    </a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#F1F6FC]">
        <div className="py-2.5 px-4 w-full max-w-[1246px] mx-auto">
          <div className="relative w-full max-w-[689px] mx-auto">
            <Input
              type="text"
              placeholder="Search..."
              inputClass="!py-1.5 !px-3.5 sm:!py-[15px] w-full shadow sm:px-6"
            />
            <div className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 cursor-pointer">
              <Search />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

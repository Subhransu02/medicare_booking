import logo from "../../assets/images/logo.png";
//import userImg from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useRef, useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/authContext";
const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => {
      window.removeEventListener("scroll", handleStickyHeader);
    };
  });

  const toggleMenu = () => {
    menuRef.current.classList.toggle("show_menu");
  };
  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container px-10">
        <div className="flex items-center justify-between">
          {/*logo*/}
          <div>
            <img src={logo} alt="" />
          </div>

          {/*menu*/}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="container">
              <ul className="menu flex items-center gap-[2.7rem]">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? "text-primaryColor text-[16px] leading-7 font-[600]"
                          : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                      }
                    >
                      {link.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/*navright*/}
          <div className="flex items-center gap-4">
            {token && user ? (
              <div>
                <Link
                  to={`${
                    role == "doctor"
                      ? "/doctors/profile/me"
                      : "/users/profile/me"
                  }`}
                >
                  <figure className="w-[35px] h-[35px] rounded-full">
                    <img
                      src={user?.photo}
                      className="w-full rounded-full cursor-auto"
                    />
                  </figure>
                  {/* <h2>{user?.name}</h2> */}
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                  Login
                </button>
              </Link>
            )}
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="text-[30px] text-primaryColor" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

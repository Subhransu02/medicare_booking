import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";

const socialLinks = [
  {
    path: "https://github.com/Subhransu02",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/subh_sekhar_panda/?hl=en",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/in/subhransu-sekhar-panda-b9897a248/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    title: "Home",
  },
  {
    path: "/",
    title: "About Us",
  },
  {
    path: "/services",
    title: "Services",
  },
  {
    path: "/",
    title: "Blog",
  },
];

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    title: "Find a Doctor",
  },
  {
    path: "/",
    title: "Request an Appointment",
  },
  {
    path: "/",
    title: "Find a Location",
  },
  {
    path: "/",
    title: "Get a Opinion",
  },
];

const quickLinks03 = [
  {
    path: "/",
    title: "Donate",
  },
  {
    path: "/contact",
    title: "Contact Us",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="pb-16 pt-10 ml-5">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="" />
            <p className="text-[16px] leading-7 font-[700] text-textColor mt-4">
              Copyright © {year} developed by Subhransu Sekhar Panda all rights
              reserved.{" "}
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E]
            rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                   <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[700] text-textColor"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                   <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[700] text-textColor"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                   <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[700] text-textColor"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

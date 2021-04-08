import { IoHome } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { RiPlayList2Line } from "react-icons/ri";
import { MdWatchLater } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isSideNav, setIsSideNav] = useState(false);
  const openSideNav = () => {
    document.getElementById("sideNav").style.width = "12%";
    setIsSideNav(true);
  };
  const closeSideNav = () => {
    document.getElementById("sideNav").style.width = "0%";
    setIsSideNav(false);
  };
  return (
    <>
      <nav className="header">
        <div className="hamburger">
          {isSideNav ? (
            <GiHamburgerMenu
              className="hamburger-icon"
              onClick={() => closeSideNav()}
            />
          ) : (
            <GiHamburgerMenu
              className="hamburger-icon"
              onClick={() => openSideNav()}
            />
          )}
        </div>
        <div className="header-list-div">
          <a className="header-list-item">
            <Link className="link" to="/">
              {" "}
              <IoHome className="header-icon" />
            </Link>
          </a>
          <a className="header-list-item">
            {" "}
            <Link className="link" to="/history">
              {" "}
              <FaHistory className="header-icon" />
            </Link>
          </a>
          <a className="header-list-item">
            {" "}
            <RiPlayList2Line className="header-icon" />
          </a>
          <a className="header-list-item">
            {" "}
            <MdWatchLater className="header-icon" />
          </a>
          <a className="header-list-item">
            <FaThumbsUp className="header-icon" />
          </a>
        </div>
      </nav>
    </>
  );
};

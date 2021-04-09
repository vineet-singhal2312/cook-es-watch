import { IoHome } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { RiPlayList2Line } from "react-icons/ri";
import { MdWatchLater } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SideNav = () => {
  return (
    <>
      <nav className="side-nav" id="sideNav">
        <Link className="link side-nav-item1" to="/">
          <IoHome className="side-nav-icon" />
        </Link>
        <Link className="link side-nav-item2" to="/history">
          <FaHistory className="side-nav-icon" />
        </Link>
        <div className="side-nav-item3">
          {" "}
          <RiPlayList2Line className="side-nav-icon" />
        </div>
        <Link className="link side-nav-item4" to="/watchlater">
          <MdWatchLater className="side-nav-icon" />
        </Link>{" "}
        <Link className="link side-nav-item5" to="/likedvideos">
          <FaThumbsUp className="side-nav-icon" />
        </Link>
      </nav>
    </>
  );
};

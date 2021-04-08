import { IoHome } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { RiPlayList2Line } from "react-icons/ri";
import { MdWatchLater } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";

export const SideNav = () => {
  return (
    <>
      <nav className="side-nav" id="sideNav">
        <div className="side-nav-item1">
          <IoHome className="side-nav-icon" />
        </div>
        <div className="side-nav-item2">
          <FaHistory className="side-nav-icon" />
        </div>
        <div className="side-nav-item3">
          {" "}
          <RiPlayList2Line className="side-nav-icon" />
        </div>
        <div className="side-nav-item4">
          <MdWatchLater className="side-nav-icon" />
        </div>
        <div className="side-nav-item5">
          {" "}
          <FaThumbsUp className="side-nav-icon" />
        </div>
      </nav>
    </>
  );
};

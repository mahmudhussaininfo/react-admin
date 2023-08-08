import { Link, useLocation } from "react-router-dom";
import { BsPersonFillGear, BsFillLockFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { BiUserCheck } from "react-icons/bi";

const Sidebar = () => {
  const location = useLocation();
  return (
    <>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">
                <span>Main</span>
              </li>
              <li className={` ${location.pathname === "/" ? "active" : ""}`}>
                <Link to="/">
                  <i className="fe fe-home"></i> <span>Dashboard</span>
                </Link>
              </li>
              <li
                className={`${location.pathname === "/users" ? "active" : ""}`}
              >
                <Link to="/users">
                  <i>
                    <BiUserCheck />
                  </i>{" "}
                  <span>Users</span>
                </Link>
              </li>
              <li className="">
                <Link to="/users">
                  <i>
                    <BiUserCheck />
                  </i>{" "}
                  <span>Products</span>
                </Link>
              </li>
              <li className="">
                <Link to="/users">
                  <i>
                    <BiUserCheck />
                  </i>{" "}
                  <span>Catagory</span>
                </Link>
              </li>
              <li className="">
                <Link to="/users">
                  <i>
                    <BiUserCheck />
                  </i>{" "}
                  <span>Brands</span>
                </Link>
              </li>
              <li
                className={`${location.pathname === "/roles" ? "active" : ""}`}
              >
                <Link to="/roles">
                  <i className="fe fe-user"></i> <span>Role</span>
                </Link>
              </li>
              <li
                className={`${
                  location.pathname === "/permission" ? "active" : ""
                }`}
              >
                <Link to="/permission">
                  <i>
                    <AiFillLock />
                  </i>{" "}
                  <span>Permission</span>
                </Link>
              </li>
              <li className="menu-title">pages</li>
              <li
                className={`${
                  location.pathname === "/profile" ? "active" : ""
                }`}
              >
                <Link to="/profile">
                  <i>
                    <BsPersonFillGear />
                  </i>{" "}
                  <span>Profile</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

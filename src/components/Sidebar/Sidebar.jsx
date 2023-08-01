import { Link } from "react-router-dom";
import { BsPersonFillGear } from "react-icons/bs";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">
                <span>Main</span>
              </li>
              <li className="">
                <Link to="/">
                  <i className="fe fe-home"></i> <span>Dashboard</span>
                </Link>
                <Link to="/users">
                  <i className="fe fe-user"></i> <span>Users</span>
                </Link>
                <Link to="/roles">
                  <i className="fe fe-user"></i> <span>Role</span>
                </Link>
                <Link to="/permission">
                  <i className="fe fe-user"></i> <span>Permission</span>
                </Link>
              </li>
              <li className="menu-title">pages</li>
              <li className="">
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

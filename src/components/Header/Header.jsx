import Logo from "../../assets/img/logo.png";
import Avatar from "../../assets/img/profiles/avatar-01.jpg";
import Doctor from "../../assets/img/doctors/doctor-thumb-01.jpg";
import Patient1 from "../../assets/img/patients/patient1.jpg";
import Patient2 from "../../assets/img/patients/patient2.jpg";
import Patient3 from "../../assets/img/patients/patient3.jpg";
import { dropdownPopup } from "../../hooks/dropdownPopup";

const Header = () => {
  const { isOpen, toggleMenu, dropDownRef } = dropdownPopup();
  const {
    isOpen: isNotificationOpen,
    toggleMenu: toggleNotificationMenu,
    dropDownRef: dropdownNotificationRef,
  } = dropdownPopup();

  return (
    <>
      <div className="header">
        <div className="header-left">
          <a href="index.html" className="logo">
            <img src={Logo} alt="Logo" />
          </a>
          <a href="index.html" className="logo logo-small">
            <img src={Logo} alt="Logo" width="30" height="30" />
          </a>
        </div>

        <a href="javascript:void(0);" id="toggle_btn">
          <i className="fe fe-text-align-left"></i>
        </a>

        <div className="top-nav-search">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Search here"
            />
            <button className="btn" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <a className="mobile_btn" id="mobile_btn">
          <i className="fa fa-bars"></i>
        </a>
        <ul className="nav user-menu">
          <li
            className="nav-item dropdown noti-dropdown"
            ref={dropdownNotificationRef}
          >
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
              onClick={toggleNotificationMenu}
            >
              <i className="fe fe-bell"></i>{" "}
              <span className="badge badge-pill">3</span>
            </a>
            {isNotificationOpen && (
              <div
                className="dropdown-menu notifications d-block"
                style={{ transform: "translate(-231px, 0px)" }}
              >
                <div className="topnav-dropdown-header">
                  <span className="notification-title">Notifications</span>
                  <a href="javascript:void(0)" className="clear-noti">
                    Clear All
                  </a>
                </div>
                <div className="noti-content">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src={Doctor}
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">
                                Dr. Ruby Perrin
                              </span>{" "}
                              Schedule{" "}
                              <span className="noti-title">
                                her appointment
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                4 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src={Patient1}
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">Charlene Reed</span>{" "}
                              has booked her appointment to{" "}
                              <span className="noti-title">
                                Dr. Ruby Perrin
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                6 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src={Patient2}
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">Travis Trimble</span>{" "}
                              sent a amount of $210 for his{" "}
                              <span className="noti-title">appointment</span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                8 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src={Patient3}
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">Carl Kelly</span>{" "}
                              send a message{" "}
                              <span className="noti-title"> to his doctor</span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                12 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  <a href="#">View all Notifications</a>
                </div>
              </div>
            )}
          </li>
          <li className="nav-item dropdown has-arrow" ref={dropDownRef}>
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
              onClick={toggleMenu}
            >
              <span className="user-img">
                <img
                  className="rounded-circle"
                  src={Avatar}
                  width="31"
                  alt="Ryan Taylor"
                />
              </span>
            </a>
            {isOpen && (
              <div
                className="dropdown-menu d-block"
                style={{ transform: "translate(-130px, 0px)" }}
              >
                <div className="user-header">
                  <div className="avatar avatar-sm">
                    <img
                      src={Avatar}
                      alt="User Image"
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  <div className="user-text">
                    <h6>Ryan Taylor</h6>
                    <p className="text-muted mb-0">Administrator</p>
                  </div>
                </div>
                <a className="dropdown-item" href="profile.html">
                  My Profile
                </a>
                <a className="dropdown-item" href="settings.html">
                  Settings
                </a>
                <a className="dropdown-item" href="login.html">
                  Logout
                </a>
              </div>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;

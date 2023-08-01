import React from "react";
import useAuthUser from "../../hooks/useAuthUser";
import ModalPopup from "../ModalPopup/ModalPopup";

const PageHeader = ({ title }) => {
  //get logged in user details
  const { user } = useAuthUser();

  return (
    <>
      <div className="page-header">
        <div className="row">
          <ModalPopup target="userModalPopup">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam aliquam labore corporis reprehenderit aperiam, a, animi
              deserunt officiis officia vitae, at debitis qui consectetur dolor
              culpa earum est pariatur consequatur mamu.
            </p>
          </ModalPopup>

          <div className="col-sm-12">
            <h3 className="page-title mb-3">Welcome to {user?.name}!</h3>
            <button
              className="btn btn-primary"
              data-target="#userModalPopup"
              data-toggle="modal"
            >
              Add New User
            </button>
            <br /> <br />
            <ul className="breadcrumb">
              <li className="breadcrumb-item active">{title}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;

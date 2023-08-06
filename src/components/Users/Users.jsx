import { useEffect, useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import DataTable from "datatables.net-dt";
import PageHeader from "../PageHeader/PageHeader";
import ModalPopup from "../ModalPopup/ModalPopup";
import useFormFields from "../../hooks/useFormFields";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomPassword } from "../../helper/helper";
import { createToast } from "../../utils/toast";
import {
  getAllPrmissionData,
  setMessageEmpty,
} from "../../features/user/userSlice";
import { createMamuUser } from "../../features/user/userApiSlice";

const Users = () => {
  const dispatch = useDispatch();
  const { user, role, error, message } = useSelector(getAllPrmissionData);
  const { input, handleChange, resetForm, setInput } = useFormFields({
    name: "",
    email: "",
    password: "",
  });

  //random password genarator
  const randomPass = generateRandomPassword(20);

  const handleRandomPassword = (e) => {
    e.preventDefault();
    setInput((prevState) => ({
      ...prevState,
      password: randomPass,
    }));
  };

  //create User
  const handleUserSubmit = (e) => {
    e.preventDefault();
    dispatch(createMamuUser(input));
  };

  useEffect(() => {
    new DataTable(".mamutable");
  });

  useEffect(() => {
    if (error && user) {
      createToast(error, "error");
      dispatch(setMessageEmpty());
    }
    if (message && user) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
    }
  }, [error, message, user]);
  return (
    <>
      <div className="page-header">
        <ModalPopup target="userPopup" title="Add users">
          <form action="" onSubmit={handleUserSubmit}>
            <div className="my-3">
              <label htmlFor="">Name</label>
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="my-3">
              <label htmlFor="">Email</label>
              <input
                type="text"
                name="email"
                value={input.email}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="my-3">
              <label htmlFor="">Pasword</label>
              <input
                type="text"
                name="password"
                value={input.password}
                onChange={handleChange}
                className="form-control"
              />
              <a
                href=""
                className="badge badge-info"
                onClick={handleRandomPassword}
              >
                Random Password
              </a>
            </div>
            <div className="my-3">
              <input type="submit" className="btn btn-primary btn-block" />
            </div>
          </form>
        </ModalPopup>
        <PageHeader title="User" />
        <div className="row">
          <div className="col">
            <button
              className="btn btn-primary"
              data-target="#userPopup"
              data-toggle="modal"
            >
              Add New Users
            </button>
            <br /> <br />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-table">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="mamutable table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th style={{ width: "50px" }}>1</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>At a Time</th>
                        <th>Status</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>
                          <ul>role</ul>
                        </td>
                        <td>createdAt</td>
                        <td style={{ width: "220px" }}>
                          <div className="status-toggle">
                            <input
                              type="checkbox"
                              id="status_1"
                              className="check"
                              checked={true}
                            />
                            <label htmlFor="status_1" className="checktoggle">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td className="text-right">
                          <button data-toggle="modal" data-target="#roleEdit">
                            <BiEdit />
                          </button>
                          &nbsp;
                          <button>
                            <BsTrashFill />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;

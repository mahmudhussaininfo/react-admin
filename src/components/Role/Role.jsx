import { useEffect, useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import DataTable from "datatables.net-dt";
import PageHeader from "../PageHeader/PageHeader";
import ModalPopup from "../ModalPopup/ModalPopup";
import useFormFields from "../../hooks/useFormFields";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPrmissionData,
  setMessageEmpty,
} from "../../features/user/userSlice";
import { createToast } from "../../utils/toast";
import { createRoles, deleteRole } from "../../features/user/userApiSlice";
import { timeAgo } from "../../helper/helper";
import swal from "sweetalert";

const Roles = () => {
  const dispatch = useDispatch();
  const { input, handleChange, resetForm } = useFormFields({
    name: "",
  });

  const { permission, role, error, message } = useSelector(getAllPrmissionData);

  const [selected, setSelected] = useState([]);

  //handle Submit
  const handleRoleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createRoles({
        name: input.name,
        permissions: [],
      })
    );
    resetForm();
    setSelected([]);
  };

  //handle Delete
  const handleDelate = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteRole(id));
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  const handleCheckboxChange = (e) => {
    const val = e.target.value;
    const updateList = [...selected];
    if (selected.includes(val)) {
      updateList.splice(selected.indexOf(val), 1);
    } else {
      updateList.push(val);
    }
    setSelected(updateList);
  };

  useEffect(() => {
    new DataTable(".mamutable");
  });

  useEffect(() => {
    if (error && role) {
      createToast(error, "error");
      dispatch(setMessageEmpty());
    }
    if (message && role) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
    }
  }, [error, message, role]);

  return (
    <>
      <div className="page-header">
        <ModalPopup target="userModalPopup" title="permission">
          <form action="" onSubmit={handleRoleSubmit}>
            <div className="my-3">
              <label htmlFor="">Role Name</label>
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="my-2">
              <label htmlFor="">Permission</label>
              {permission &&
                permission.map((item, index) => {
                  return (
                    <label className="d-block" key={index}>
                      <input
                        value={item.name}
                        checked={selected.includes(item.name)}
                        onChange={handleCheckboxChange}
                        type="checkbox"
                      />{" "}
                      <span> {item.name}</span>
                    </label>
                  );
                })}
            </div>
            <div className="my-3">
              <input type="submit" className="btn btn-primary btn-block" />
            </div>
          </form>
        </ModalPopup>
        <PageHeader title="Roles" />
        <div className="row">
          <div className="col-md-12">
            <div className="card card-table">
              <div className="card-body">
                <div className="table-responsive">
                  {role && (
                    <table className="mamutable table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th style={{ width: "50px" }}>1</th>
                          <th>Name</th>
                          <th>Slug</th>
                          <th>Permission</th>
                          <th>At a Time</th>
                          <th>Status</th>
                          <th className="text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...role]?.reverse().map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{item.name}</td>
                              <td>{item.slug}</td>
                              <td>permission</td>
                              <td>{timeAgo(item.createdAt)}</td>
                              <td style={{ width: "220px" }}>
                                <div className="status-toggle">
                                  <input
                                    type="checkbox"
                                    id="status_1"
                                    className="check"
                                    checked={true}
                                  />
                                  <label
                                    htmlFor="status_1"
                                    className="checktoggle"
                                  >
                                    checkbox
                                  </label>
                                </div>
                              </td>
                              <td className="text-right">
                                <button onClick={() => handleDelate(item._id)}>
                                  <BsTrashFill />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roles;

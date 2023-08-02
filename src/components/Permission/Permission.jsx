import { useEffect, useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import DataTable from "datatables.net-dt";
import PageHeader from "../PageHeader/PageHeader";
import ModalPopup from "../ModalPopup/ModalPopup";

const Permission = () => {
  const [input, setInput] = useState({
    name: "",
  });

  //handle input change
  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //handle Submit data
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    new DataTable(".mamutable");
  });
  return (
    <>
      <div className="page-header">
        <ModalPopup target="userModalPopup" title="permission">
          <form action="" onSubmit={handleSubmit}>
            <div className="my-3">
              <label htmlFor="">Permission Name</label>
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="my-3">
              <input type="submit" className="btn btn-primary btn-block" />
            </div>
          </form>
        </ModalPopup>
        <PageHeader title="User" />
        <div className="row">
          <div className="col-md-12">
            <div className="card card-table">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="mamutable table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>1</th>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>At a Time</th>
                        <th>Status</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ width: "50px" }}>1</td>
                        <td>Mamu</td>
                        <td>mamu</td>
                        <td>9 min ago</td>
                        <td>
                          <div className="status-toggle">
                            <input
                              type="checkbox"
                              id="status_1"
                              className="check"
                              checked
                            />
                            <label htmlFor="status_1" className="checktoggle">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td className="text-right">
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

export default Permission;

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Content from '../../components/HOC/Content'
import { addEmployee } from '../../redux/actions/employeeAction';
import EmployeeModal from './EmployeeModal';
import { colorSelector } from "../../utils/colorSelector";

function Employees() {
    let dispatch = useDispatch();
    let employees = useSelector((state) => state.employees);
    const submitEmployee = (employee) => {
        employee.id = Math.floor(Math.random() * 100 + 1);
        dispatch(addEmployee(employee));
    };
    return (
        <main className="mt-4">
        <button
            type="button"
            className="btn btn-primary modal-btn"
            data-toggle="modal"
            data-target="#modelEmployeeId"
        >
            NEW
        </button>

        <div className="lists">
        <div className="header py-3">
          <div className="row">
            <div className="col-9 col-lg-11">
              <h4>All Employees</h4>
            </div>
              <Link to="/search/employees" className="search-link"><i className="fa fa-search"></i></Link>
          </div>
        </div>
        <div className="items mx-auto row">
          {employees.length >= 1 ? (
            employees.map((employee) => (
                <div className="col-md-6 col-lg-12 my-2" key={employee.id}>
                  <Link to={`/employees/${employee.id}`} className={`item-sm ${colorSelector()}`}>
                    <div className="item row mx-auto">
                      <div className="col-12 col-lg-6">
                        {employee.name}
                      </div>
                      <div className="col-8 col-lg-4">
                        {employee.position}
                      </div>
                      <div className="col-4 col-lg-2">
                        {employee.sex}
                      </div>
                      <div className="col-12 col-lg-6">
                        {employee.email}
                      </div>
                      <div className="col-12 col-lg-4">
                        {employee.phone}
                      </div>
                      <div className="col-12 col-lg-2">
                        &#8358;{employee.salary}
                      </div>
                    </div>
                  </Link>
                </div>
            ))
          ) : (
            <p className="text-center col-12">No Employee yet...</p>
          )}
        </div>
      </div>

      <EmployeeModal submitEmployee={submitEmployee} />
     </main>
    )
}

export default Content(Employees)

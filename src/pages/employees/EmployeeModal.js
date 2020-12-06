import React, { useState } from 'react'

function EmployeeModal({submitEmployee, data, getUpdatedData }) {
    const [employee, setEmployee] = useState({
        name: data ? data.name : '',
        email: data ? data.email :  '',
        phone: data ? data.phone :  '',
        sex: data ? data.sex :  'Male',
        position: data ? data.position :  '',
        hire_date: data ? data.hire_date :  '',
        date_of_birth: data ? data.date_of_birth :  '',
        salary: data ? data.salary :  '',
        home_address: data ? data.home_address :  '',
        city: data ? data.city :  '',
        state: data ? data.state :  ''
    })
    const handleChange = e => {
        setEmployee({
            ...employee,
            [e.target.id]: e.target.value
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (employee.name === '' || employee.homeAddress === '' || employee.position === '') return
        data ? getUpdatedData(employee): submitEmployee(employee);
        setEmployee({
          name: data ? employee.name : '',
          email: data ? employee.email :  '',
          phone: data ? employee.phone :  '',
          sex: data ? employee.sex :  'Male',
          position: data ? employee.position :  '',
          hire_date: data ? employee.hire_date :  '',
          date_of_birth: data ? employee.date_of_birth :  '',
          salary: data ? employee.salary :  '',
          home_address: data ? employee.home_address :  '',
          city: data ? employee.city :  '',
          state: data ? employee.state :  ''
        });
    }
    return (
        <div className="modal fade" id="modelEmployeeId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Employee</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div className="modal-body">
                           <form onSubmit={handleSubmit}>
                               <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                 <input type="text" className="form-control" name="name" id="name" onChange={handleChange} value={employee.name} aria-describedby="helpId" placeholder="Name" />
                               </div>
                               <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" name="email" id="email" onChange={handleChange} value={employee.email} aria-describedby="helpId" placeholder="Email" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" className="form-control" name="phone" id="phone" onChange={handleChange} value={employee.phone} aria-describedby="helpId" placeholder="Phone" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="sex">Sex</label>
                                <select className="form-control select" name="sex" id="sex" onChange={handleChange} value={employee.sex}>
                                    <option className="option">Male</option>
                                    <option className="option">Female</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <label htmlFor="position">Position</label>
                                <input type="text" className="form-control" name="position" id="position" onChange={handleChange} value={employee.position} aria-describedby="helpId" placeholder="Position" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="hire_date">Hire Date</label>
                                <input type="date" className="form-control" name="hire_date" id="hire_date" onChange={handleChange} value={employee.hire_date} aria-describedby="helpId" placeholder="Hire Date" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="date_of_birth">Date of Birth</label>
                                <input type="date" className="form-control" name="date_of_birth" id="date_of_birth" onChange={handleChange} value={employee.date_of_birth} aria-describedby="helpId" placeholder="Date of Birth" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="salary">Salary (&#8358;)</label>
                                <input type="text" className="form-control" name="salary" id="salary" onChange={handleChange} value={employee.salary} aria-describedby="helpId" placeholder="Salary" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="home_address">Home Address</label>
                                <input type="text" className="form-control" name="home_address" id="home_address" onChange={handleChange} value={employee.home_address} aria-describedby="helpId" placeholder="Home Address" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input type="text" className="form-control" name="city" id="city" onChange={handleChange} value={employee.city} aria-describedby="helpId" placeholder="City" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="state">State</label>
                                <input type="text" className="form-control" name="state" id="state" onChange={handleChange} value={employee.state} aria-describedby="helpId" placeholder="State" />
                              </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Save</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default EmployeeModal

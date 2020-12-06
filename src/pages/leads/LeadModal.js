import React, { useState } from "react";

function LeadModal({ submitLead, data, getUpdatedData }) {
  const [lead, setLead] = useState({
    name: data ? data.name : '',
    email: data ? data.email :  '',
    phone: data ? data.phone :  '',
    company_name: data ? data.company_name :  '',
    location: data ? data.location :  '',
    status: data ? data.status :  'Won',
    note: data ? data.note :  '',
  });
  const handleChange = (e) => {
    setLead({
      ...lead,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <div
      className="modal fade"
      id="modelLeadId"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Lead</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
              <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  name="name"
                  id="name"
                  aria-describedby="helpId"
                  placeholder="Full Name"
                />
              </div>
              <div className="form-group">
              <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={handleChange}
                  name="email"
                  id="email"
                  aria-describedby="helpId"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
              <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  name="phone"
                  id="phone"
                  aria-describedby="helpId"
                  placeholder="Phone"
                />
              </div>
              <div className="form-group">
              <label htmlFor="company_name">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  name="company_name"
                  id="company_name"
                  aria-describedby="helpId"
                  placeholder="Company Name"
                />
              </div>
              <div className="form-group">
              <label htmlFor="location">Location</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  name="location"
                  id="location"
                  aria-describedby="helpId"
                  placeholder="Location"
                />
              </div>
              <div className="form-group">
                <label htmlFor="status">Status</label>
                <select className="form-control select" name="status" id="status" onChange={handleChange}>
                  <option className="option">Won</option>
                  <option className="option">Lost</option>
                </select>
              </div>
              <div className="form-group">
              <label htmlFor="notes">Notes</label>
                <textarea
                  className="form-control"
                  onChange={handleChange}
                  name="notes"
                  id="notes"
                  rows="3"
                  placeholder="Notes..."
                ></textarea>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadModal;

import React, { useState } from 'react'

function CustomerModal({ submitCustomer, data, getUpdatedData }) {
    const [customer, setCustomer] = useState({
        name: data ? data.name : '',
        email: data ? data.email : '',
        phone: data ? data.phone : '',
        company_name: data ? data.company_name : '',
        location: data ? data.location : '',
        note: data ? data.note : ''
    })
    const handleChange = e => {
        setCustomer({
            ...customer,
            [e.target.id]: e.target.value
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (customer.name === '' || customer.location === '') return
        data ? getUpdatedData(customer): submitCustomer(customer);
        setCustomer({
            name: data ? customer.name : '',
            email: data ? customer.email : '',
            phone: data ? customer.phone : '',
            company_name: data ? customer.company_name : '',
            location: data ? customer.location : '',
            note: data ? customer.note : ''
        });
    }
    return (
        <div className="modal fade" id="modelCustomerId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Customer</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" name="name" id="name" onChange={handleChange} value={customer.name} aria-describedby="helpId" placeholder="Full Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" id="email" onChange={handleChange} value={customer.email} aria-describedby="helpId" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="tel" className="form-control" name="phone" id="phone" onChange={handleChange} value={customer.phone} aria-describedby="helpId" placeholder="Phone" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="company_name" id="company_name" onChange={handleChange} value={customer.company_name} aria-describedby="helpId" placeholder="Company Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="location" id="location" onChange={handleChange} value={customer.location} aria-describedby="helpId" placeholder="Location" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="note" id="note" onChange={handleChange} value={customer.note} rows="3" placeholder="Note..."></textarea>
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

export default CustomerModal

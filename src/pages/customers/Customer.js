import React from 'react'
import { Link } from 'react-router-dom'
import Content from '../../components/HOC/Content'
import CustomerModal from './CustomerModal'
import { useDispatch, useSelector } from 'react-redux'
import { addCustomer } from '../../redux/actions/customerAction'
import { colorSelector } from "../../utils/colorSelector";

function Customer() {
    let dispatch = useDispatch();
    let customers = useSelector((state) => state.customers);
    const submitCustomer = (customer) => {
        customer.id = Math.floor(Math.random() * 100 + 1);
        dispatch(addCustomer(customer));
    };
    return (
        <main className="mt-4">
            <button
                type="button"
                className="btn btn-primary modal-btn"
                data-toggle="modal"
                data-target="#modelCustomerId"
            >
                NEW
            </button>
            <div className="lists">
                <div className="header py-3">
                    <div className="row">
                        <div className="col-9 col-lg-11">
                        <h4>All Customers</h4>
                        </div>
                        <Link to="/search/customers" className="search-link"><i className="fa fa-search"></i></Link>
                    </div>
                </div>
                <div className="items mx-auto row">
                {customers.length >= 1 ? (
                    customers.map((customer) => (
                        <div className="col-md-6 col-lg-12 my-2" key={customer.id}>
                        <Link to={`/customers/${customer.id}`} className={`item-sm ${colorSelector()}`}>
                            <div className="item row mx-auto">
                            <div className="col-12 col-lg-3">
                                {customer.name}
                            </div>
                            <div className="col-12 col-lg-2">
                                {customer.email}
                            </div>
                            <div className="col-12 col-lg-3">
                                {customer.company_name}
                            </div>
                            <div className="col-12 col-lg-2">
                                {customer.phone}
                            </div>
                            <div className="col-12 col-lg-2">
                                {customer.location}
                            </div>
                            </div>
                        </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-12">No Customer yet...</p>
                )}
        </div>
      </div>
            
            <CustomerModal submitCustomer={submitCustomer} />
        </main>
    )
}

export default Content(Customer)

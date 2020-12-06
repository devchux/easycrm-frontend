import React from 'react'
import Content from '../../components/HOC/Content'
import { useDispatch } from 'react-redux';
import CustomerModal from './CustomerModal';
import { deleteCustomer, updateCustomer } from '../../redux/actions/customerAction';
import Preview from '../../components/HOC/Preview';

function CustomerPreview({data}) {
    let dispatch = useDispatch();
    const getUpdatedData = Customer => {
        Customer.id = data.id
        dispatch(updateCustomer(data.id, Customer))
    }
    return (
        <div >
            <button
                type="button"
                className="btn btn-danger modal-btn modal-btn-2"
                onClick={()=>{dispatch(deleteCustomer(data.id))}}
            >
                DEL
            </button>
            <button
                type="button"
                className="btn btn-primary modal-btn"
                data-toggle="modal"
                data-target="#modelCustomerId"
            >
                NEW
            </button>
            
            <CustomerModal data={data} getUpdatedData={getUpdatedData} />
        </div>
    )
}

export default Content(Preview(CustomerPreview))

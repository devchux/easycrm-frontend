import React from 'react'
import Content from '../../components/HOC/Content'
import { useDispatch } from 'react-redux';
import EmployeeModal from './EmployeeModal';
import { deleteEmployee, updateEmployee } from '../../redux/actions/employeeAction';
import Preview from '../../components/HOC/Preview';

function EmployeePreview({data}) {
    let dispatch = useDispatch();
    const getUpdatedData = Employee => {
        Employee.id = data.id
        dispatch(updateEmployee(data.id, Employee))
    }
    return (
        <div >
            <button
                type="button"
                className="btn btn-danger modal-btn modal-btn-2"
                onClick={()=>{dispatch(deleteEmployee(data.id))}}
            >
                DEL
            </button>
            <button
                type="button"
                className="btn btn-primary modal-btn"
                data-toggle="modal"
                data-target="#modelEmployeeId"
            >
                NEW
            </button>
            
            <EmployeeModal data={data} getUpdatedData={getUpdatedData} />
        </div>
    )
}

export default Content(Preview(EmployeePreview))

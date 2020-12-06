import React from 'react'
import Content from '../../components/HOC/Content'
import { useDispatch } from 'react-redux';
import DealModal from './DealModal';
import { deleteDeal, updateDeal } from '../../redux/actions/dealAction';
import Preview from '../../components/HOC/Preview';

function DealPreview({data}) {
    let dispatch = useDispatch();
    const getUpdatedData = Deal => {
        Deal.id = data.id
        dispatch(updateDeal(data.id, Deal))
    }
    return (
        <div >
            <button
                type="button"
                className="btn btn-danger modal-btn modal-btn-2"
                onClick={()=>{dispatch(deleteDeal(data.id))}}
            >
                DEL
            </button>
            <button
                type="button"
                className="btn btn-primary modal-btn"
                data-toggle="modal"
                data-target="#modelDealId"
            >
                NEW
            </button>
            
            <DealModal data={data} getUpdatedData={getUpdatedData} />
        </div>
    )
}

export default Content(Preview(DealPreview))

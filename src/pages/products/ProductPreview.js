import React from 'react'
import Content from '../../components/HOC/Content'
import { useDispatch } from 'react-redux';
import ProductModal from './ProductModal';
import { deleteProduct, updateProduct } from '../../redux/actions/productAction';
import Preview from '../../components/HOC/Preview';

function ProductPreview({data}) {
    let dispatch = useDispatch();
    const getUpdatedData = product => {
        product.id = data.id
        dispatch(updateProduct(data.id, product))
    }
    return (
        <div >
            <button
                type="button"
                className="btn btn-danger modal-btn modal-btn-2"
                onClick={()=>{dispatch(deleteProduct(data.id))}}
            >
                DEL
            </button>
            <button
                type="button"
                className="btn btn-primary modal-btn"
                data-toggle="modal"
                data-target="#modelProductId"
            >
                NEW
            </button>
            
            <ProductModal data={data} getUpdatedData={getUpdatedData} />
        </div>
    )
}

export default Content(Preview(ProductPreview))

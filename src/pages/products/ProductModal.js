import React, { useState } from 'react';

function ProductModal({submitProduct, data, getUpdatedData }) {
    const [product, setProduct] = useState({
        name: data ? data.name : '',
        type: data ? data.type : '',
        price: data ? data.price : '',
        description: data ? data.description : '',
        note: data ? data.note : ''
    });
    const handleChange = e => {
        setProduct({
            ...product,
            [e.target.id]: e.target.value
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (product.name === '' || product.price === '') return
        data ? getUpdatedData(product): submitProduct(product);
        setProduct({
            name: data ? product.name : '',
            type: data ? product.type : '',
            price: data ? product.price : '',
            description: data ? product.description : '',
            note: data ? product.note : ''
        });
    }
    return (
        <div className="modal fade" id="modelProductId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Product</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="form-group">
                                <input type="text" className="form-control" name="name" id="name" onChange={handleChange} value={product.name} placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="type" id="type" onChange={handleChange} value={product.type} placeholder="Type" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="price" id="price" onChange={handleChange} value={product.price} placeholder="Price" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="description" id="description" onChange={handleChange} value={product.description} rows="3" placeholder="Description..."></textarea>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="note" id="note" rows="3" onChange={handleChange} value={product.note} placeholder="Note..."></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductModal

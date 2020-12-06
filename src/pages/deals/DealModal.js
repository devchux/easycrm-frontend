import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function DealModal({submitDeal, data, getUpdatedData }) {
    const {products, customers} = useSelector(state => state )
    const [deal, setDeal] = useState({
        product_name: data ? data.product_name : products.length > 0 ? products[0].name : products[0],
        price: data ? data.price : '',
        customer: data ? data.customer : customers.length > 0 ? customers[0].name : customers[0],
        quantity: data ? data.quantity : 0,
        status: data ? data.status : 'Completed',
        note: data ? data.note : ''
    })
    const handleChange = e => {
        setDeal({
            ...deal,
            [e.target.id]: e.target.value
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (deal.name === '' || deal.homeAddress === '' || deal.position === '') return
        data ? getUpdatedData(deal): submitDeal(deal);
        setDeal({
          product_name: data ? deal.product_name : '',
          price: data ? deal.price :  '',
          customer: data ? deal.customer :  '',
          quantity: data ? deal.quantity :  0,
          status: data ? deal.status :  '',
          note: data ? deal.note :  ''
        });
    }
    return (
        <div className="modal fade" id="modelDealId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Deal</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div className="modal-body">
                           <form onSubmit={handleSubmit}>
                               <div className="form-group">
                                 <label htmlFor="product_name">Product Name</label>
                                 <select className="form-control select" name="product_name" id="product_name" value={deal.product_name} onChange={handleChange}>
                                   {products.length > 0 ? products.map(product => (
                                        <option className="option" key={product.id}>{product.name}</option>
                                   )): <option className="option" disabled>Loading...</option>}
                                 </select>
                               </div>
                              <div className="form-group">
                                <label htmlFor="price">Price (&#8358;)</label>
                                <input type="text" className="form-control" name="price" id="price" value={deal.price} onChange={handleChange} aria-describedby="helpId" placeholder="Price" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="customer">Client</label>
                                <select className="form-control select" name="customer" id="customer" value={deal.customer} onChange={handleChange}>
                                   {customers.length > 0 ? customers.map(customer => (
                                        <option className="option" key={customer.id}>{customer.name}</option>
                                   )): <option className="option" disabled>Loading...</option>}
                                 </select>
                              </div>
                              <div className="form-group">
                                <label htmlFor="quantity">Quantity</label>
                                <input type="number" className="form-control" name="quantity" id="quantity" value={deal.quantity} onChange={handleChange} aria-describedby="helpId" min="0" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="status">Status</label>
                                <select className="form-control select" name="status" id="status" value={deal.status} onChange={handleChange} >
                                  <option className="option">Completed</option>
                                  <option className="option">In progress</option>
                                  <option className="option">Lead</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <label htmlFor="note">Note</label>
                                <textarea className="form-control" name="note" id="note" rows="3" value={deal.note} onChange={handleChange} placeholder="Notes..."></textarea>
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

export default DealModal

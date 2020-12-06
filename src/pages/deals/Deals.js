import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Content from '../../components/HOC/Content'
import DealModal from './DealModal'
import { addDeal } from '../../redux/actions/dealAction'
import { colorSelector } from "../../utils/colorSelector"

function Deals() {
    let deals = useSelector((state) => state.deals);
    const dispatch = useDispatch()
    const submitDeal = (deal) => {
        deal.id = Math.floor(Math.random() * 100 + 1);
        dispatch(addDeal(deal));
    };
    return (
        <main className="mt-4">
            <button
                type="button"
                className="btn btn-primary modal-btn"
                data-toggle="modal"
                data-target="#modelDealId"
            >
                NEW
            </button>
            <div className="lists">
                <div className="header py-3">
                    <div className="row">
                        <div className="col-9 col-lg-11">
                            <h4>All Deals</h4>
                        </div>
                        <Link to="/search/deals" className="search-link"><i className="fa fa-search"></i></Link>
                    </div>
                </div>
                <div className="items mx-auto row">
                    {deals.length >= 1 ? (
                        deals.map((deal) => (
                            <div className="col-md-6 col-lg-12 my-2" key={deal.id}>
                                <Link to={`/deals/${deal.id}`} className={`item-sm ${colorSelector()}`}>
                                    <div className="item row mx-auto">
                                        <div className="col-12 col-lg-3">
                                            {deal.product_name}
                                        </div>
                                        <div className="col-6 col-lg-2">
                                            &#8358;{deal.price}.00
                                        </div>
                                        <div className="col-6 col-lg-2">
                                            {deal.quantity} pcs
                                        </div>
                                        <div className="col-12 col-lg-3">
                                            {deal.customer}
                                        </div>
                                        <div className="col-12 col-lg-2">
                                            {deal.status}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p className="text-center col-12">No Deal yet...</p>
                    )}
                </div>
             </div>

            
            <DealModal submitDeal={submitDeal} />
        </main>
    )
}

export default Content(Deals)

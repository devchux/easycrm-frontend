import React from 'react'
import Content from '../../components/HOC/Content'
import LeadModal from './LeadModal'

function Leads() {
    return (
        <main className="mt-4">
            <form className="search-form">
                <div className="row">
                    <div className="col-6 col-md-3">
                        <div className="form-group">
                            <input type="text" className="form-control search" name="" id="" aria-describedby="helpId" placeholder="Search Leads" />
                        </div>
                    </div>
                    <div className="col-6 col-md-5">
                        <div className="form-group">
                            <button type="button" className="btn btn-outline-primary modal-btn" data-toggle="modal" data-target="#modelLeadId">
                                ADD
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <div className="lists">
                <div className="header py-3">
                    <div className="row">
                        <div className="col-5">
                            <p>Name</p>
                        </div>
                        <div className="col-4">
                            <p>Company</p>
                        </div>
                        <div className="col-3">
                            <p>Status</p>
                        </div>
                    </div>
                </div>
                <div className="items">
                    <a href="">
                        <div className="item row">
                            <div className="col-5">
                                <p>Name</p>
                            </div>
                            <div className="col-4">
                                <p>Company</p>
                            </div>
                            <div className="col-3">
                                <p>Status</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            
            <LeadModal />
        </main>
    )
}

export default Content(Leads)

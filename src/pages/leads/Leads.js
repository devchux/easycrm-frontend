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
            
            
            <LeadModal />
        </main>
    )
}

export default Content(Leads)

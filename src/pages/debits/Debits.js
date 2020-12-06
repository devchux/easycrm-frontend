import React from 'react'
import Content from '../../components/HOC/Content'

function Debits() {
    return (
        <main className="mt-4">
            <form className="search-form">
                <div className="row">
                    <div className="col-6 col-md-3">
                        <div className="form-group">
                            <input type="text" className="form-control search" name="" id="" aria-describedby="helpId" placeholder="Search Debitors" />
                        </div>
                    </div>
                    <div className="col-6 col-md-5">
                        <div className="form-group">
                            <button type="button" className="btn btn-outline-primary modal-btn" data-toggle="modal" data-target="#modelDebitorId">
                                ADD
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <div className="lists">
                <div className="header py-3">
                    <div className="row">
                        <div className="col-4">
                            <p>Name</p>
                        </div>
                        <div className="col-4">
                            <p>Salary</p>
                        </div>
                        <div className="col-4">
                            <p>Date Due</p>
                        </div>
                    </div>
                </div>
                <div className="items">
                    <a href="">
                        <div className="item row">
                            <div className="col-4">
                                <p>Imam Shebbi</p>
                            </div>
                            <div className="col-4">
                                <p>500,00</p>
                            </div>
                            <div className="col-4">
                                <p>Date Due</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="modal fade" id="modelDebitorId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Debitor</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div className="modal-body">
                           <form>
                              <div className="form-group">
                                <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="Debitor's Name" />
                              </div>
                              <div className="form-group">
                                <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="Amount" />
                              </div>
                              <div className="form-group">
                                <label for="due date">Due Date</label>
                                <input type="date" className="form-control" name="" id="" aria-describedby="helpId" />
                              </div>
                           </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Content(Debits)

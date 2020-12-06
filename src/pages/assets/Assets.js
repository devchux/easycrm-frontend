import React from 'react'
import Content from '../../components/HOC/Content'

function Assets() {
    return (
        <main className="mt-4">
            <form className="search-form">
                <div className="row">
                    <div className="col-6 col-md-3">
                        <div className="form-group">
                            <input type="text" className="form-control search" name="" id="" aria-describedby="helpId" placeholder="Search Assets" />
                        </div>
                    </div>
                    <div className="col-6 col-md-5">
                        <div className="form-group">
                            <button type="button" className="btn btn-outline-primary modal-btn" data-toggle="modal" data-target="#modelAssetId">
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
                        <div className="col-3">
                            <p>Purchase Date</p>
                        </div>
                        <div className="col-2">
                            <p>Quantity</p>
                        </div>
                        <div className="col-3">
                            <p>Purchased By</p>
                        </div>
                    </div>
                </div>
                <div className="items">
                    <a href="">
                        <div className="item row">
                            <div className="col-4">
                                <p>Name</p>
                            </div>
                            <div className="col-3">
                                <p>11/12/2020</p>
                            </div>
                            <div className="col-2">
                                <p>2</p>
                            </div>
                            <div className="col-3">
                                <p>Purchased By</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            
            <div className="modal fade" id="modelAssetId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Asset</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div className="modal-body">
                           <form>
                               <div className="form-group">
                                 <input type="text" className="form-control" name="" id="" aria-describedby="helpId" placeholder="Equipment Name" />
                               </div>
                               <div className="form-group">
                                <label htmlFor="">Equipment Category</label>
                                <select className="form-control select" name="" id="">
                                  <option className="option">Hardware</option>
                                  <option className="option">Software</option>
                                </select>
                              </div>
                              <div className="form-group">
                                  <label htmlFor="">Purchase Date</label>
                                <input type="date" className="form-control" name="" id="" aria-describedby="helpId" defaultValue="2020-06-05" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="">Maintenance Schedule</label>
                                <select className="form-control select" name="" id="">
                                  <option className="option">Daily</option>
                                  <option className="option">Weekly</option>
                                  <option className="option">Quarterly</option>
                                  <option className="option">Yearly</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <label htmlFor="">Quantity</label>
                                <input type="number" className="form-control" name="" id="" aria-describedby="helpId" defaultValue="0" min="0" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="">Health Status</label>
                                <select className="form-control select" name="" id="">
                                  <option className="option">Normal</option>
                                  <option className="option">Warning</option>
                                  <option className="option">Alert</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <label htmlFor="">Purchased By</label>
                                <select className="form-control select" name="" id="">
                                  <option className="option">Chukwudi</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <textarea className="form-control" name="" id="" rows="3" placeholder="Notes..."></textarea>
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

export default Content(Assets)

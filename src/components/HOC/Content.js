import React, { useEffect } from 'react';
import author from '../../img/author.png';
import Navbar from '../Navbar';

function Content(NewComponent) {
    return function OriginalComponent(props) {
        useEffect(() => {
          let menu = document.querySelector('.hamburger');
          let navbar = document.querySelector('.side-nav');
          let closeNavbar = document.querySelector('.cancel-nav');
          menu.addEventListener('click', () => {
            navbar.classList.toggle('display-none')
          })
          closeNavbar.addEventListener('click', () => {
              navbar.classList.add('display-none')
          })
        },[])
        return (
            <>
            <Navbar />
            <div className="content">
                <div className="d-flex justify-content-between">
                    <div className="">
                        <button className="btn btn-outline-primary hamburger"><i className="fa fa-hamburger"></i></button>
                    </div>
                    <div className="">
                        <img src={author} alt="Chukwudi Eze" className="personal-logo" />
                        <span className='title d-none d-lg-inline ml-auto'>Chukwudi Eze</span>
                    </div>
                </div>
                <NewComponent {...props} />
            </div>
            </>
        )
        
    }
}

export default Content

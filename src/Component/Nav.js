import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(){
    return(
    <section className='nav-items'>
        <img src="../images/Rectangle 2.png" alt="" className="rec-2" />
            <img src="../images/logo.png" alt="" className="nav-img" />
        <div className="nav-list">
                <Link to ="/">Home</Link>
                <Link to ="/about">About Us</Link>
                <Link to ="/services">Services</Link> 
            <div className="butt">  
                <a href ="/contact"  className="nav-start">Get in touch</a>
        </div>
            </div>
    </section>
    )
}
import React from 'react'
import Typical from 'react-typical'

export default function About(){
    return(
        <section className='hero-Section'>

            <div className="hero-page">
                <div className="hero-text">
                    <h1>Tech Solution is Our Craft</h1>
                    <p>We {' '} <span>
                    <Typical 
                        loop ={Infinity}
                        wrapper = 'b'
                        steps= {[
                            'provide Infrastructural Services',
                            2000,
                            'build Web Applications',
                            2000,
                            'offer IT Solutions',
                            2000,
                        ]}
                        >
                        </Typical>
                        </span>
                    </p>
                    <p className="anali">From analysing systems to planning and execution, we can help<br></br> you determine what steps to take to fill the gaps in your current<br></br> business technology. </p>
                    
                    </div>
                <div className="hero-image">
                    <img src="../images/herophoto.png" alt="poto" className="hero-img"/>

                </div>

            </div>
            <div className="hero-tb">
                    <a href="/about" className="hero-button">Get in touch &#8594;</a>
            </div>
        
        <section className='product-section'>
             <div className="product-header">
                 <h3>Our Products</h3>
                 <p>Impact - driven technology, Future proof your business with our host of enteprise solutions</p>
             </div>
             <div className="grid-Services">
                 <div className="grid-container">
                     <img src="../images/photo3.png" alt="im1" className="grid-1"/>
                     <div className="grid-text">
                     <h2>TFEO IT INFRASTRUCTURE</h2> 
                    <p>Cloud CCTV, Data center services, Power<br></br> Solutions, 
                    LAN Cabling Copper, Supply of<br></br>
                    IT Consumables, Fibre Optics, IP<br>
                    </br>Infrastructure, Collaboration Services.</p>
                    </div>
                 </div>


                 <div className="grid-container">
                     <img src="../images/photo2.png" alt="im1" className="grid-2"/>
                     <div className="grid-text">
                     <h2>TFEO ICT CONSULTING & OUTSOURCING</h2>
                     <p>Business Automation, Project Management,<br></br> Mobile Application Development</p>
                     </div>
                 </div>

                 <div className="grid-container">
                     <img src="../images/photo1.png" alt="im1" className="grid-3"/>
                     <div className="grid-text">
                     <h2>TFEO WEB SERVICES</h2>
                     <p>Website Development, Social Media<br></br> Integration & Customization, Hosting &<br></br> 
                     Domain Name Registration, Digital<br></br> Marketing,Content Management Systems.</p>
                     </div>
                 </div>
                 
                 
             </div>
             <div className="product-header">
                 <h3>Our Service Offerings</h3>
                 <p>TFEO  has designed and built innovative business network that offers Guaranteed Operational Efficiency at every stage.<br></br> 
                 Scalabiity is available both ways, thereby allowing you to update or downscale as appropriate.</p>
             </div>

             <div className="service-container">
                 <div className="service-image">
                     <img src="../images/hero2.png" alt='serv-im' className="hero-im"/>
                 </div>

                 <div className="service-text">
                     <h2>IT INFRASTRUCTURE</h2>
                     <ul>
                         <li>Data Center Services</li>
                         <li>Collaboration Services</li>
                         <li>Managed Network</li>
                         <li>Infrastructure and Cloud Solutions</li>
                         <li>Power Solutions</li>
                         <li>Cloud CCTV</li>
                     </ul>
                     <h2 className="ul-push">ICT CONSULTING & OUTSOURCING</h2>
                     <ul>
                         <li>Business Automation</li>
                         <li>Project Management </li>
                         <li>Mobile Development</li>
                     </ul >
                     <h2 className="ul-push">WEB SERVICES</h2>
                     <ul>
                         <li>Website Development</li>
                         <li>Social Media Integration & Customization </li>
                         <li>Hosting & Domain Name Registration</li>
                     </ul>
                 </div>
                 
             </div>
             <div className="footer">
                 <div className="footer-container">
                     <p>2021 TFEO</p>
                 </div>
             </div>
             
        </section>
    
    </section>
    )
}
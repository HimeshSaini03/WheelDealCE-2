import React from 'react';

import '../styles/Detailingcar.css';

function Detailingcars() { 
   
    

return (

    
    <div>
    <section className="home1" id="home1">
        <div className="home1-text">
            <h1>We Have Everything<br/>your<span>Car</span>Needs</h1>
            <p>Premium Car Detailing<br/>And Modification</p>
            <a href="/" className="btn">Discover now</a>
        </div>
        
        <div className="video">
            <video autoPlay muted loop src="/img/carvideo.mp4"></video>
        </div>
    </section>

    
    <section className="cars1" id="cars1">
        <div className="heading1">
            <span>Modified By WheelDeal</span>
            <h2>We Deal With All Types of Cars</h2>
            <p></p>
        </div>
        <div className="cars1-container container">
            <div className="box">
                <img src="/img/mm.jpeg" alt=""/>
                <h2>Mercedes</h2>
            </div>
            
            <div className="box">
                <img src='../img/uu.jpg'alt=""/>
                <h2>Urus</h2>
            </div>
            <div className="box">
                <img src="../img/gwagon - Copy.jpg" alt=""/>
                <h2>G-Wagon</h2>
            </div>
            <div className="box">
                <img src="../img/idumban-6.jpg" alt=""/>
                <h2>Endeavour</h2>
            </div>
            <div className="box">
                <img src="../img/RS3_001-23.webp" alt=""/>
                <h2>Audi</h2>
            </div>
            <div className="box">
                <img src="../img/Ford-Mustan-GT-modified-India.jpg" alt=""/>
                <h2>Mustang GT</h2>
            </div>
        </div>
    </section>
    
    
    <section className="about1 container" id="about">
        <div className="about1-img11">
            <img src="../img/Car-Body-Parts.jpg" alt=""/>
        </div>
        <div className="about1-text">
            <span>About Us ..</span>
            <h2>Modification Kit <br/>Unbeatable Quality</h2>
            <p></p>
  
            <a href="/" className="btn">Learn More</a>
        </div>
  
        <section className="parts1" id="parts1">
            <div className="heading1">
                <span>What we Offer</span>
                <h2>Our Service is always Excellent</h2>
                <p>All Types of Detailing Work</p>
            </div>
            <div className="parts1-container container">
                <div className="box">
                    <img src="../img/coating.jpg"/>
                    <h3>Ceramic and Graphene Coating</h3>
                    <a href="ceramic.html" className="btn">View More</a>
                    <a href="/" className="details">Help</a>
                </div>
                <div className="box">
                    <img src="../img/ppf.jpg" alt=""/>
                    <h3>Paint Protection Film</h3>
                    <a href="ppf.html" className="btn">View More</a>
                    <a href="/" className="details">Help</a>
                </div>
                <div className="box">
                    <img src="../img/painting_car.webp" alt=""/>
                    <h3>Body-Shop(Denting&Painting)</h3>
                    <a href="/" className="btn">View More</a>
                    <a href="/" className="details">Help</a>
                </div>
                <div className="box">
                    <img src="../img/detailing.webp" alt=""/>
                    <h3>Detailing And Finishing</h3>
                    <a href="/" className="btn">View More</a>
                    <a href="/" className="details">Help</a>
                </div>
                <div className="box">
                    <img src="../img/wrappppp.jpg" alt=""/>
                    <h3>Wrap Jobs</h3>
                    <a href="/" className="btn">View More</a>
                    <a href="/" className="details">Help</a>
                </div>
              
                <div className="box">
                    <img src="../img/interior.jpg" alt=""/>
                    <h3>Inner Modification</h3>
                    <a href="/" className="btn">Buy Now</a>
                    <a href="/" className="details">Help</a>
                </div>
            </div>

        </section>
    </section>
    <section className="blog1" id="blog1">
        <div className="heading1">
            <span>Blog & News </span>
            <h2>Our Blog Content</h2>
            <p>Providing Excellent Service To our Customer With Trusted Brand Partners</p>
        </div>
        <div className="blog1-container container">
            
            <div className="box">
                <img src="../img/alloys.webp" alt=""/>
                <h3>Best Quality Parts </h3>
                <p>Only reliable and Authorized Modification parts are used</p>
                <a href="/" className="blog-btn">Read More<i className='bx bxs-right-arrow-alt'></i></a>
            </div>
          
            <div className="box">
                <img src="../img/Pulse+Automotive_Workshop.jpg" alt=""/>
                <h3>Great Service And Experienced Staff</h3>
                <p>Our Staff is Well Trained and Experienced We Provide A className Service</p>
                <a href="/" className="blog-btn">Read More<i className='bx bxs-right-arrow-alt'></i></a>
            </div>
                <img src="../img/DSC7051.jpg" alt=""/>
    
                <h3>From 2015..</h3>
                <p>WheelDeal is a trusted Car Detailing company and our customer base is all over India</p>
                <a href="/" className="blog-btn">Read More<i className='bx bxs-right-arrow-alt'></i></a>
            </div>
    </section>

    <section className="footer1"><div className="footer1-container container">
          <div className="footer1-box">
              <a href="/" className="logo1">Wheel<span>Deal</span></a>
              <div className="social">
                  <a href="https://about.meta.com/"><i className='bx bxl-meta'></i></a>
                  <a href="https://twitter.com/i/flow/signup#"><i className='bx bxl-twitter'></i></a>
                  <a href="https://www.instagram.com/"><i className='bx bxl-instagram'></i></a>
                  <a href="https://www.youtube.com/"><i className='bx bxl-youtube'></i></a>
              </div>
          </div>
          <div className="footer1-box">
              <h3>Page</h3>
              <a href="/">Home</a>
              <a href="/">Parts</a>
              <a href="/">Sales</a>
              <a href="/">Cars</a>
          </div>
          <div className="footer1-box">
              <h3>Legal</h3>
              <a href="/">Privacy</a>
              <a href="/">Refund Policy</a>
              <a href="/">Cookie Policy</a>

          </div>
          <div className="footer1-box">
              <h3>Contact</h3>
              <p>New Delhi</p>
              <p>Chandigarh</p>
              <p>Mumbai</p>
          </div>
      </div>
    </section>
    </div>
  );
}

export default Detailingcars;

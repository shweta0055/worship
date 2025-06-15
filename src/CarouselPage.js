import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import imgcds2 from "./images/cds-img2.jpg";
import imgsection2 from "./images/img-section-2.png";
import download from "./images/download-icon.png";
import feedback from "./images/feedback.png";
import training from "./images/training.png";
import cancel from "./images/cancel.png";
import fee from "./images/fee-structure.png";
import ok from "./images/ok.png";
import profile from "./images/profile.png";
import downld from "./images/download-new.png";
import banner1 from "./images/banner1.jpg";

import "./CarouselPage.css";

function CarouselPage() {
  return (
    <div>
      <div className="bg-container">
        <Carousel>
          <Carousel.Item>
            <img
              style={{ height: "60vh" }}
              className="d-block w-100"
              src={banner1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Redefining CAPF & CDS Preparation with Hybrid Learning! </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "60vh" }}
              className="d-block w-100"
              src={img2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Redefining CAPF & CDS Preparation with Hybrid Learning! </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "60vh" }}
              className="d-block w-100"
              src={img3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Redefining CAPF & CDS Preparation with Hybrid Learning!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="">
          <div className="mt-5 mb-5 container">
            <div className="row ">
              <div className="col-md-7  mb-5">
                <h1 className="text-head fs-40 lh-48 fw-600 text-color-2 text-lg-start text-center">
                  Lakshya – UPSC CAPF AC Foundation Course 2026{" "}
                </h1>
                <p className="p-text">
                  Are you dreaming of wearing the stars and serving India as a CAPF Assistant Commandant? Lakshya CAPF 2026 is your complete 360° preparation program – designed for aspirants starting from scratch.

<p className="p-text mt-2"> Whether you're in college or a recent graduate, this foundation batch is structured to guide you step-by-step until you crack the exam.</p>
                </p>
                <div className="d-md-flex course-banner-btn gap-5 mt-5">
                  <button
                    className="blue-fill-btn px-5 lato-bold"
                    tabindex="0"
                    style={{ transform: "none" }}
                  >
                    Enquire Now
                  </button>
                  <div className="d-flex justify-content-center">
                    <button
                    className="common-white-btn d-flex row "
                    tabindex="0"
                    style={{ transform: "none" }}
                  >
                    <img className="downlg-icon " src={downld} />
                    Download Brochure
                  </button>
                  </div>
                  
                </div>
              </div>
              <div className="col-md-5 mb-5 course-img">
                <img
                  className="img-container"
                  src={imgsection2}
                  alt="image of cds program"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="mt-5 text-center " style={{color:'#000'}}>Trusted by Candidates Nationwide</h2>
      <p className="text-center">Worship Academy delivers expert-led preparation with quality content,<br /> personal support, and results that speak for themselves.</p>
      
      <div className="stats-section">
      <div className="stat-card">
        <img src={download} alt="Downloads" />
        <h2>150+ Million</h2>
        <p>downloads</p>
      </div>

      <div className="stat-card">
        <img src={training} alt="App Rating" />
        <h2>4.7+ Star</h2>
        <p>app rating</p>
      </div>

      <div className="stat-card">
        <img src={feedback} alt="Cities" />
        <h2>1701+ Cities</h2>
        <p>worldwide</p>
      </div>
    </div>

    <div className="container mt-5">
      
  <div className="main-box-shadow">
  

  <div className="milestone-content">
    <h2 style={{color:'#000'}}>UPSC CAPF AC Course Highlights</h2>
    <p>This milestone covers essential digital marketing strategies, audience research, and campaign execution alongside mastering website creation with WordPress. Learners will develop market insights, craft value-driven strategies, and build optimized, professional websites that align with marketing objectives.</p>

    <div className="modules">
      
      <div className="module shadow">
        <h3 className="module-header">Complete Syllabus Coverage</h3>
        <ul>
          <li>Paper 1: General Ability & Intelligence (GS + Reasoning + Aptitude)</li>
          <li>Paper 2: Essay, Report Writing, Precis & English Language</li>
        </ul>
        
      </div>

      <div className="module shadow">
        <div className="module-header">Top-Notch Faculty</div>
        <ul>
          <li>Learn from experienced educators, UPSC experts & Retired CAPF Officers</li>
          <li>Expert-led sessions designed for conceptual clarity and exam orientation</li>
        </ul>
        
      </div>

  
      <div className="module shadow">
        <div className="module-header">Comprehensive Study Material</div>
        <ul>
          <li>Printed Notes, Practice Booklets, Essay Templates & MCQ Sets</li>
          <li>Monthly Current Affairs Magazine – crisp, relevant & exam-focused</li>
        </ul>
        
      </div>

    </div>
  </div>
  
    <div className="modules">
      
      <div className="module shadow">
        <h3 className="module-header">Complete Syllabus Coverage</h3>
        <ul>
          <li>Paper 1: General Ability & Intelligence (GS + Reasoning + Aptitude)</li>
          <li>Paper 2: Essay, Report Writing, Precis & English Language</li>
        </ul>
        
      </div>

      <div className="module shadow">
        <div className="module-header">Top-Notch Faculty</div>
        <ul>
          <li>Learn from experienced educators, UPSC experts & Retired CAPF Officers</li>
          <li>Expert-led sessions designed for conceptual clarity and exam orientation</li>
        </ul>
        
      </div>

  
      <div className="module shadow">
        <div className="module-header">Comprehensive Study Material</div>
        <ul>
          <li>Printed Notes, Practice Booklets, Essay Templates & MCQ Sets</li>
          <li>Monthly Current Affairs Magazine – crisp, relevant & exam-focused</li>
        </ul>
        
      </div>

    </div>
</div>
    </div>
    <div className="p-4 section-mt">
    <h2 className="mb-3 text-center " style={{color:'#000'}}>CAPF AC Course Key Features</h2>
    <div className="container pricing-table mb-5">
      
      <table>
        <thead>
          <tr>
            <th><h3>Features</h3></th>
            <th><h3>Offline Course</h3></th>
            <th><h3>Online Course</h3></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Advanced Google Analytics 4 Integration</strong></td>
            
            <td><img src={cancel} /></td>
            <td><img src={ok} /></td>
          </tr>
          <tr>
            <td><strong>Keyword Rank Tracker</strong></td>
            
            <td><img src={cancel} /></td>
            <td><img src={ok} /></td>
          </tr>
          <tr>
            <td>Tracked keywords</td>
            
            <td><img src={cancel} /></td>
            <td><img src={ok} /></td>
          </tr>
          <tr>
            <td>Free <strong>Content AI Trial</strong> With Credits</td>
            
            <td><img src={cancel} /></td>
            <td><img src={ok} /></td>
          </tr>
          <tr>
            <td><strong>Track Google Index Status</strong></td>
           
            <td><img src={cancel} /></td>
            <td><img src={ok} /></td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>

    

    <div className="container fee-structure">
      <h2>Fee structure of this program</h2>
      <div className="fee-container">
        <div className="left">
          <img className="h-100" src={fee} alt="image of fee structure" />
        </div>

        <div className="right">
          <div className="cohort text-center">
            <h3>UPCS CAPF AC Foundation Offline Batch</h3>
          </div>

          <div className="discount">
            <span className="discount-text">
              Total Offline Course Fee:
            </span>
          </div>

          <div className="pricing">
            <div className="old-price">₹75,000/-</div>
            <div className="new-price">
              ₹55,000/- <span className="blue-badge">Flat ₹20,000 OFF</span>
            </div>
          </div>

          <ul className="features">
            <li className="d-flex align-items-start"><img src={ok} /> Batch Starting Date:  October, 2025</li>
            <li className="d-flex align-items-start"><img src={ok} /> Venue: GTB Nagar, New Delhi</li>
            <li className="d-flex align-items-start"><img src={ok} /> Offer Expire on midnight of : June 2025</li>
          </ul>

         <div className="d-flex justify-content-center"> <button className="apply-button">Apply Now</button></div>
        </div>
      </div>
    </div>

    <div className=" container testimonial-section">
      <div className="left-content">
        <h2>Leading SEOs are Loving Rank Math!</h2>
        <p>Do not miss this golden opportunity to improve your on-page SEO</p>

        <div className="rating-box">
          <div className="stars">
            {Array(5).fill().map((_, index) => (
              <span key={index} className="star">★</span>
            ))}
          </div>
          <div className="rating-text">
            <strong>4.9 Overall Satisfaction Rating!</strong>
            <p className="review-count">Based on 7148 Reviews</p>
          </div>
        </div>
      </div>

      <div className="right-content">
        <div className="testimonial-card">
          <p className="testimonial-text">
            “Rank Math is seriously THE BEST SEO plugin that I ever installed and tried out in my 6 years of Blogging! It is hands-down one of the most mind-blowing, help...”
          </p>
          <div className="profile">
            <img src={profile} alt="Ryan Robinson" />
            <div>
              <strong>Ryan Robinson</strong>
              <p>Marketing Consultant, SEO-Writer, Worked with LinkedIn, Google, Adobe</p>
              <p className="website">RYRob.com</p>
            </div>
          </div>

          <div className="dots">
            {[...Array(7)].map((_, idx) => (
              <span key={idx} className={`dot ${idx === 5 ? 'active' : ''}`}></span>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="container demo-container mt-5 mb-5">
      <div className="demo-left">
        <h2 style={{color:'#fff'}}>Still Confused? Want to know more?</h2>
        <div className="input-group">
          <div className="phone-input">
            <span role="img" aria-label="India Flag">🇮🇳</span> +91
          </div>
          <button className="demo-btn">Book Demo Now</button>
        </div>
        <p className="demo-text">
          Secure your spot quickly—seats are filling fast! Don’t miss out—enroll now and take the first step towards transforming your career!
        </p>
      </div>
      <div className="demo-right">
        <p className="hire-text">WORSHIP ACADEMY GRADUATES HAVE BEEN HIRED BY</p>
        <div className="logo-box-grid">
          {[
            "Meta", "vodafone", "Google", "amazon", "Microsoft", "Walmart",
            "verizon", "IBM", "YouTube", "TATA", "SAMSUNG", "Uber",
            "accenture", "FedEx", "TikTok"
          ].map((brand, i) => (
            <div key={i} className="logo-box">{brand}</div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default CarouselPage;
import React from "react";
import TestimonialSlider from './TestimonialSlider';
import FAQ from './faq';
import imgsection2 from "./images/img-section-2.png";
import download from "./images/download-icon.png";
import feedback from "./images/feedback.png";
import training from "./images/training.png";
import cancel from "./images/cancel.png";
import ok from "./images/ok.png";
import downld from "./images/download-new.png";
import phoneimg from "./images/img-phn.jpg";
import mobile from './images/mobile-img.png'

import "./CarouselPage.css";

function CarouselPage() {
  return (
    <div>
      <div className="bg-container">
        
        <div className="">
          <div className="mb-5 container">
            <div className="row ">
              <div className="col-md-7  mb-5 mt-5 ">
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
              <div className="col-md-5 mb-5 mt-5  course-img">
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

    

    <div className="container fee-structure mt-5 mb-5">
      <h2>Batch Details</h2>
      <div className="d-flex row gap-3 justify-content-center">
        <div className=" fee-container left">
          <div className="cohort text-center">
            <h3>UPCS CAPF AC Foundation Online Batch</h3>
          </div>

          <div className="discount">
            <span className="discount-text">
              Total Offline Course Fee:
            </span>
          </div>

          <div className="pricing">
            
            <div className="new-price">
              ₹55,000/- <span className="old-price">₹75,000/-</span><span className="blue-badge">Flat ₹20,000 OFF</span>
            </div>
          </div>

          <ul className="features">
            <li className="d-flex align-items-start"><img src={ok} /> Batch Starting Date:  October, 2025</li>
            <li className="d-flex align-items-start"><img src={ok} /> Venue: GTB Nagar, New Delhi</li>
            <li className="d-flex align-items-start"><img src={ok} /> Offer Expire on midnight of : June 2025</li>
          </ul>

         <div className="d-flex justify-content-center"> <button className="apply-button">Apply Now</button></div>
        </div>

        <div className="fee-container right">
          <div className="cohort text-center">
            <h3>UPCS CAPF AC Foundation Offline Batch</h3>
          </div>

          <div className="discount">
            <span className="discount-text">
              Total Offline Course Fee:
            </span>
          </div>

          <div className="pricing">
            <div className="new-price">
              ₹55,000/- <span className="old-price">₹75,000/-</span><span className="blue-badge">Flat ₹20,000 OFF</span>
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

    <div className="container mt-5">
      <h2>Why Join CAPF AC Foundation Course by Us?</h2>
      <p>The digital marketing industry is growing at a fast pace. This field has become a booming career today and the demand for skilled online marketers will increase all the more in the coming years.</p>
      <p>If you develop the essential skills, you can make the most out of this growing field and make a great career. At WsCube Tech, we offer the best online digital marketing course in India with certificate. Throughout the years, we have understood the expectations of the learners and created the curriculum accordingly. This makes us the best platform in India for digital marketing course online</p>
      <p>Whether you are a college learner, recent graduate, job seeker, existing digital marketer, freelancer, business owner, or someone looking to grow in this field, then our strategic online course on digital marketing is for you</p>
      <p>With this course, you can become a Digital Marketing Manager, SEO Expert, PPC Specialist, Content Marketer, YouTube Manager, Social Media Manager, or even start your own agency.</p>    
    
    </div>
    
    <div className="container fee-structure">
      <h2>APP Section</h2>
      <div className="app-container">
        <div className="left-cont col-md-6 p-4">
          <h3 className="mt-4">Get the learning app</h3>
          <p className="mt-4">Download lessions and learn anytime, anywhere with the worship academy app</p>
          <div className="col-md-12 col-lg-12 col-12 app-icon mb-3 gap-2 mt-5 justify-content-center">
                            <img className='app-icon-w' src='https://cdnstatic.nextias.com/assets/images/icons/googleplay-download.svg' />
                            
                            <img className='app-icon-w' src='https://cdnstatic.nextias.com/assets/images/icons/appstore-download.svg' />
                            </div>
        </div>
        <div className="right-cont col-md-6 p-4">
          <img className="" src={mobile} />
        </div>
        
      </div>
    </div>
    
    <div>
      <TestimonialSlider />
    </div>

    <div>
      <FAQ />
    </div>

    
    
  
    
    </div>
  );
}

export default CarouselPage;


/*<Carousel>
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
        */
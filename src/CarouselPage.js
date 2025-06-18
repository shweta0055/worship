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
                  Looking for the <strong>CAPF AC Coaching</strong> that truly sets you on the path to success? You’ve come to the right place. Your journey to becoming an Assistant Commandant begins here. The dream of wearing the stars and serving the nation starts with this very first step.

<p className="p-text mt-2">
  Our <strong>UPSC CAPF AC 2026 Foundation Course</strong>  is meticulously designed for complete 360° preparation and structured to guide aspirants in a step-by-step manner. Whether you’re a college student or a recent graduate, this course is suitable for helping you build a strong foundation from scratch.</p>
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
      <p className="text-center">Students from all over India trust <strong> Worship Academy</strong> for their CAPF AC exam preparation.<br />  Worship Academy is the <strong>best CAPF AC coaching in Delhi,</strong> helping aspirants get closer to their dream of becoming an Assistant Commandant.</p>
      
      <div className="stats-section">
      <div className="stat-card">
        <img src={download} alt="Downloads" />
        <h2>1000+ Students</h2>
        <p>Community</p>
      </div>

      <div className="stat-card">
        <img src={training} alt="App Rating" />
        <h2>40+ Selected</h2>
        <p>Candidates</p>
      </div>

      <div className="stat-card">
        <img src={feedback} alt="Cities" />
        <h2>4.7+ Star</h2>
        <p>App Rating</p>
      </div>
    </div>

    <div className="container mt-5">
      
  <div className="main-box-shadow">
  

  <div className="milestone-content">
    <h2 style={{color:'#000'}}>UPSC CAPF AC Course Highlights</h2>
    <p>The <strong>UPSC CAPF AC Foundation Course</strong> is designed to equip aspirants with knowledge, guidance and strategies required to excel in the Central Armed Police Forces Assistant Commandant Examination. This comprehensive course ensures structured learning and in-depth coverage of the CAPF AC exam syllabus.
</p>
<p>The curriculum and study material are set module-wise to cover all the topics of Paper 1 and Paper 2 in a simplified and organized manner. This approach helps aspirants grasp concepts easily with better retention. With expert faculty and personal mentorship, we ensure a smooth and effective learning experience.
</p>
<p>Here’s a detailed breakdown of what our <strong> CAPF AC Foundation Course </strong> offers:
</p>

    <div className="modules">
      
      <div className="module shadow">
        <h3 className="module-header">Complete Syllabus Coverage</h3>
        <ul>
          <li><strong>Paper 1:</strong> General Ability & Intelligence (GS + Reasoning + Aptitude)</li>
          <li><strong>Paper 2:</strong> Essay, Report Writing, Precis & English Language</li>
          <li>Interview + Personality Test Training (Post Written)</li>
          <li>Physical Efficiency Test (PET) Guidance</li>
        </ul>
        
      </div>

      <div className="module shadow">
        <div className="module-header">Experienced Faculty</div>
        <ul>
          <li>Learn from experienced educators and UPSC Experts </li>
          <li>Gain guidance from Retd. CAPF Officers</li>
        </ul>
        
      </div>

  
      <div className="module shadow">
        <div className="module-header">Comprehensive Study Material</div>
        <ul>
          <li>Printed Notes, Practice Booklets, Essay Templates and MCQ Sets</li>
          <li>Crisp, monthly and exam-focused Monthly Current Affairs Magazine</li>
        </ul>
        
      </div>

    </div>
  </div>
  
    <div className="modules">
      
      <div className="module shadow">
        <h3 className="module-header">Smart Testing System</h3>
        <ul>
          <li>Weekly MCQ Tests for Paper 1 & Monthly Topics for Paper 2</li>
          <li>Full-Length Mock Tests with detailed feedback</li>
        </ul>
        
      </div>

      <div className="module shadow">
        <div className="module-header">Personal Mentorship</div>
        <ul>
          <li>Personalized 1-on-1 Guidance</li>
          <li>Dedicated doubt-solving support via Telegram/WhatsApp</li>
        </ul>
        
      </div>

  
      <div className="module shadow">
        <div className="module-header">Modes of Learning</div>
        <ul>
          <li>Offline: Delhi Centre (GTB Nagar, New Delhi)</li>
          <li>Online: Live + Recorded classes accessible across India</li>
          <li>Bilingual Mode: Hindi + English</li>
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
            <h3>UPCS CAPF AC Foundation <br /> Offline Batch</h3>
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
            <h3>UPCS CAPF AC Foundation <br /> Online Batch</h3>
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
      <h2>Why Choose Us for the CAPF AC Foundation Course?</h2>
      <p><strong>Worship Academy</strong> comes with many strengths and those are enough to help students achieve success in the CAPF AC exam. Some of these are enriched course curriculum, updated study material, experienced faculty, affordable pricing and more.
</p>
      <p>Our <strong> CAPF AC Foundation Coaching</strong> is available in different modes. Let’s have a look at both the modes:</p>   
      <h3>Offline CAPF AC Coaching in Delhi</h3>
      <p><strong>Worship Academy</strong> is widely considered the <strong> best coaching for CAPF AC in Delhi</strong> and across India. Our offline centre is located in <strong> GTB Nagar, New Delhi</strong>,  where all classes are conducted. </p> 
      <p>The classes are taken by highly experienced faculty who have the same background as CAPF or relevant experience. The batch size is optimal, ensuring that every student doesn’t face any difficulty in learning and gets proper attention.</p>

      <h3>Online CAPF AC Coaching</h3>
      <p>We also provide <strong> online CAPF AC Coaching</strong> apart from offline coaching. This is ideal for students who cannot attend classes in offline mode and want to prepare from their homes. We provide Live + recorded classes as part of our <strong> CAPF AC Foundation Course</strong>.</p>

      <p>Our <strong> dedicated mobile App</strong> allows students to explore online courses and attend online classes. Worship Academy provides the <strong> best online CAPF AC coaching</strong>, as it has a well-structured Learning Management System (LMS). Study material and tests can all be accessed directly from the application itself.
</p>
    
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
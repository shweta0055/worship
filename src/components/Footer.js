import React from 'react'
import logo from '../images/wa-logo.png'

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg-6 col-12 ft-1">
                            <div className='row logo-footer'>
                                <img className='logo'  src={logo} />
                                <h3 className='logo-text-footer'><span>Worship </span>Academy</h3>
                            </div>
                            <p>Turning Aspirants into Officers!
Your ultimate<br /> destination for CAPF & CDS preparation. </p>
                            <div className="col-md-12 col-lg-12 col-12 app-icon mb-3 gap-2">
                            <img className='app-icon-w' src='https://cdnstatic.nextias.com/assets/images/icons/googleplay-download.svg' />
                            
                            <img className='app-icon-w' src='https://cdnstatic.nextias.com/assets/images/icons/appstore-download.svg' />
                            </div>
                            <div className="col-md-12 col-lg-12 col-12 ft-3 mt-4">
                            
                            <p style={{ marginBottom: 0 }}><i class="fa-solid fa-phone-volume "></i><a className='footer-text' href="tel:+91 7340107490">+917340107490</a>, <a className='footer-text' href="tel:+ 8368730670" >+8368730670</a> </p>
                            <p><i class="fa-solid fa-envelope "></i><a className='footer-text' href="mailto:worshipcapf@gmail.com" >worshipcapf@gmail.com</a> </p>
                        </div>
                            <div className="footer-icons mt-4">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>CAPF Courses</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="nav-item-font" href="/">CAPF Foundation Course</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-item-font" href="/">CAPF Paper 2 Crash Course</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-item-font" href="/">CAPF Mock Interview</a>
                                </li></ul>
                                <h5>CAPF Test Series</h5>
                                <ul>
                                <li className="nav-item">
                                    <a className="nav-item-font" href="/">Shakti Paper 1 Test Series - CAPF</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-item-font" href="/">UPSC CAPF AC Exam</a>
                                </li>
                            </ul>
                            <h5>Resources</h5>
                                <ul>
                                <li className="nav-item">
                                    <a className="nav-item-font" href="/">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-item-font" href="/">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>CDS Courses</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="nav-item-font" href="/">CDS Foundation Course</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-item-font" href="/">CDS Crash Course</a>
                                </li>
                            </ul>
                            <h5>CDS Test Series</h5>
                                <ul>
                                <li className="nav-item">
                                    <a className="nav-item-font" href="/">Shakti Paper 1 Test</a>
                                </li>
                            </ul>
                            
                            <h5>Company</h5>
                                <ul>
                                <li className="nav-item">
                                    <a className="nav-item-font" href="/">About US</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-item-font" href="/">Contact US</a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <div><div className="inline-border-list-dark d-flex justify-content-center text-muted gap-3">
                        <a className='footer-text' href="#">Privacy Policy</a>
                        <span>|</span>
                        <a className='footer-text' href="#">Terms & Conditions</a>
                        <span>|</span>
                        <a className='footer-text' href="#">Sitemap</a>
                        
                    </div></div>
                </div>
            </div>
            <div className='horizontal-line aVng1S mt-2' id='lineid958'></div>
            <div className='Last-footer'>
                <p>© 2025 Worship Academy - All Rights Reserved.</p>
            </div>
        </>
    )
}

export default Footer


/*<div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Quick Links</h5>
                            <p><i class="fa-solid fa-phone-volume"></i> +91 7340107490, 8368730670</p>
                            <p><i class="fa-solid fa-envelope"></i> worshipcapf@gmail.com</p>
                            <p><i class="fa-solid fa-paper-plane"></i> ABC</p>
                        </div>
                        */

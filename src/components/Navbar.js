import React from 'react'
import { Link } from "react-router-dom";
import logo from '../images/wa-logo.png'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container py-2">
                    <div className='row'>
                        <img className='logo'  src={logo} />
                        <Link className="navbar-brand logo-txt" to="/" ><span className='top-text' style={{ color: '#004d9d' }}>WORSHIP</span> ACADEMY</Link>
                    
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/*<img src={logo} /> means */}
                    <div className="collapse navbar-collapse align-middle" id="navbarNav">
                        <ul className="navbar-nav ms-auto nav_ul align-items-center">
                           

                            <li className="nav-item nav-item-text">
                                <Link className="nav-link hover-underline-animation center" to="/home">Home</Link>
                            </li>
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle " href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    CAPF
                                </a>
                                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                                    <li><a className=" nav-link dropdown-item top-text font-strong" href="/" style={{ fontWeight: 500}}>CAPF Courses</a>
                                    
                                    <ul className='indentation' style={{listStyleType: 'none'}}><li><a className="dropdown-item" href="/">CAPF Foundation Course</a></li>
                                    <li><a className="dropdown-item" href="/">CAPF Paper 2 Crash Course</a></li>
                                    <li><a className="dropdown-item" href="/">CAPF Mock Interview</a></li>
                                    </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="/" style={{ fontWeight: 500}}>CAPF Test Series</a>
                                    <ul className='indentation' style={{listStyleType: 'none'}}><li><a className="dropdown-item" href="/">Shakti Paper 1 Test Series - CAPF</a></li>
                                    <li><a className="dropdown-item" href="/">UPSC CAPF AC Exam</a></li>
                                    </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    CDS
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className=" nav-link dropdown-item " href="/" style={{ fontWeight: 500}}>CDS Courses</a>
                                    
                                    <ul className='indentation' style={{listStyleType: 'none'}}><li><a className="dropdown-item" href="/">CDS Foundation Course</a></li>
                                    <li><a className="dropdown-item" href="/">CDS Crash Course</a></li>
                                    </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="/" style={{ fontWeight: 500}}>CDS Test Series</a>
                                    <ul className='indentation' style={{listStyleType: 'none'}}><li><a className="dropdown-item" href="/">Shakti Paper 1 Test</a></li></ul>
                                    </li>
                                </ul>
                            </li>
                          
                             <li className="nav-item">
                                
                                <Link className="nav-link hover-underline-animation center" to="/">Live-Online</Link>
                            </li>
                           
                            
                            <li className="nav-item">
                                <Link className="nav-link hover-underline-animation center" to="/team">Faculty</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link hover-underline-animation center" to="/">Free Test</Link>
                            </li>
                            
                            
                            <div className="mx-3">
                                <button type="button" className="btn1 mx-2"><a href='https://web.classplusapp.com/login?orgCode=xpeezg' style={{color:'#fff!important'}}>Login/Register</a></button>
                               
                            </div>
                            
                        </ul>
                    </div>
                    {/*<!--<img className='live-online' src="https://ik.imagekit.io/qs1ljxeoyu/live-online.gif?updatedAt=1749470781834"></img><li className="nav-item">
                                <Link className="nav-link hover-underline-animation center" to="/contact">Contact Us</Link>
                            </li><li className="nav-item">
                                <Link className="nav-link hover-underline-animation center" to="/team">Team</Link>
                            </li><li className="nav-item">
                                <Link className="nav-link hover-underline-animation center" to="/card">Card</Link>
                            </li> <button type="button" className="btn2 mx-2">Sign Up</button><!--<div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
                            </div>-->end */}
                </div>
            </nav>
        </>
    )
}

export default Navbar





 {/* <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/about" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li> /*<li className="nav-item">
                                <Link className="nav-link" to="/about">Home</Link>
                            </li> <!--<li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    More
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>       About-> Home  <!-- <li className="nav-item ">
                                <Link className="nav-link hover-underline-animation center" to="/about">About</Link>
                            </li>-->*/}
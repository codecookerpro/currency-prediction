import React, { useEffect } from "react";

/// Components
import Markup from "./jsx";

/// Style
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./css/style.css";

import { withResizeDetector } from "react-resize-detector";

import ThemeContextProvider from "./context/ThemeContext";

const App = ({ width }) => {

  return (
    <>

      {/* START LOADER */}
      <div id="loader-wrapper">
          <div id="loading-center-absolute">
              <div className="object" id="object_four"></div>
              <div className="object" id="object_three"></div>
              <div className="object" id="object_two"></div>
              <div className="object" id="object_one"></div>
          </div>
          <div className="loader-section section-left"></div>
          <div className="loader-section section-right"></div>

      </div>
      {/* END LOADER */} 

      {/* START HEADER */}
      <header className="header_wrap fixed-top">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg"> 
            <a className="navbar-brand animation" href="index.html" data-animation="fadeInDown" data-animation-delay="1s"> 
                    <img className="logo_light" src="assets/images/logo.png" alt="logo" /> 
                      <img className="logo_dark" src="assets/images/logo_dark.png" alt="logo" /> 
                  </a>
                  <button className="navbar-toggler animation" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-animation="fadeInDown" data-animation-delay="1.1s"> 
                      <span className="ion-android-menu"></span> 
                  </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav m-auto">
                          <li className="dropdown animation" data-animation="fadeInDown" data-animation-delay="1.1s">
                  <a data-toggle="dropdown" className="nav-link dropdown-toggle active" href="#">Home</a>
                    <div className="dropdown-menu">
                          <ul className="list_none">
                                        <li>
                                              <a className="dropdown-item menu-link dropdown-toggler active" href="index.html">Home Page</a>
                                              <div className="dropdown-menu">
                                                  <ul className="list_none"> 
                                                      <li><a className="dropdown-item nav-link nav_item active" href="index.html">Default</a></li> 
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-particle.html">Particle</a></li>
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-modern.html">modern</a></li>
                                                  </ul>
                                              </div>
                                        </li>
                                    <li>
                                              <a className="dropdown-item menu-link dropdown-toggler" href="index-light-blue-pro.html">Landing page Light Blue Pro</a>
                                              <div className="dropdown-menu">
                                                  <ul className="list_none"> 
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-light-blue-pro.html">Default</a></li> 
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-light-blue-pro-particle.html">Particle</a></li>
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-light-blue-pro-modern.html">modern</a></li>
                                                  </ul>
                                              </div>
                                         </li>
                                          <li>
                                              <a className="dropdown-item menu-link dropdown-toggler" href="index-blue-pro.html">Landing page Blue Pro</a>
                                              <div className="dropdown-menu">
                                                  <ul className="list_none"> 
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-blue-pro.html">Default</a></li> 
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-blue-pro-particle.html">Particle</a></li>
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-blue-pro-modern.html">modern</a></li>
                                                  </ul>
                                              </div>
                                         </li>
                                         <li>
                                              <a className="dropdown-item menu-link dropdown-toggler" href="index-blue-light.html">Landing page Light Blue</a>
                                              <div className="dropdown-menu">
                                                  <ul className="list_none"> 
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-blue-light.html">Default</a></li> 
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-blue-light-particle.html">Particle</a></li>
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-blue-light-modern.html">modern</a></li>
                                                  </ul>
                                              </div>
                                         </li>
                                         <li>
                                              <a className="dropdown-item menu-link dropdown-toggler" href="index-blue.html">Landing page Blue</a>
                                              <div className="dropdown-menu">
                                                  <ul className="list_none"> 
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-blue.html">Default</a></li> 
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-blue-particle.html">Particle</a></li>
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-blue-modern.html">modern</a></li>
                                                  </ul>
                                              </div>
                                         </li>
                                         <li>
                                              <a className="dropdown-item menu-link dropdown-toggler" href="index-light-dark.html">Landing page Light Dark</a>
                                              <div className="dropdown-menu">
                                                  <ul className="list_none"> 
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-light-dark.html">Default</a></li> 
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-light-dark-particle.html">Particle</a></li>
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-light-dark-modern.html">modern</a></li>
                                                  </ul>
                                              </div>
                                         </li>
                                         <li>
                                              <a className="dropdown-item menu-link dropdown-toggler" href="index-dark.html">Landing page Dark</a>
                                              <div className="dropdown-menu">
                                                  <ul className="list_none"> 
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-dark.html">Default</a></li> 
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-dark-particle.html">Particle</a></li>
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-dark-modern.html">modern</a></li>
                                                  </ul>
                                              </div>
                                         </li>
                                         <li>
                                              <a className="dropdown-item menu-link dropdown-toggler" href="index-royal-blue.html">Landing page Royal Blue</a>
                                              <div className="dropdown-menu">
                                                  <ul className="list_none"> 
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-royal-blue.html">Default</a></li> 
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-royal-blue-particle.html">Particle</a></li>
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-royal-blue-modern.html">modern</a></li>
                                                  </ul>
                                              </div>
                                         </li>
                                         <li>
                                              <a className="dropdown-item menu-link dropdown-toggler" href="index-navy-blue.html">Landing page Navy Blue</a>
                                              <div className="dropdown-menu">
                                                  <ul className="list_none"> 
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-navy-blue.html">Default</a></li> 
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-navy-blue-particle.html">Particle</a></li>
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-navy-blue-modern.html">modern</a></li>
                                                  </ul>
                                              </div>
                                         </li>
                                         <li>
                                              <a className="dropdown-item menu-link dropdown-toggler" href="index-light-purple.html">Landing page Light Purple</a>
                                              <div className="dropdown-menu">
                                                  <ul className="list_none"> 
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-light-purple.html">Default</a></li> 
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-light-purple-particle.html">Particle</a></li>
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-light-purple-modern.html">modern</a></li>
                                                  </ul>
                                              </div>
                                         </li>
                                         <li>
                                              <a className="dropdown-item menu-link dropdown-toggler" href="index-cyan-blue.html">Landing page Cyan Blue</a>
                                              <div className="dropdown-menu">
                                                  <ul className="list_none"> 
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-cyan-blue.html">Default</a></li> 
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-cyan-blue-particle.html">Particle</a></li>
                                                      <li><a className="dropdown-item nav-link nav_item" href="index-cyan-blue-modern.html">modern</a></li>
                                                  </ul>
                                              </div>
                                         </li>
                                  </ul>
                                </div>   
                          </li>
                          <li className="animation" data-animation="fadeInDown" data-animation-delay="1.2s"><a className="nav-link nav_item" href="about.html">About</a></li>
                          <li className="dropdown animation" data-animation="fadeInDown" data-animation-delay="1.3s">
                            <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu">
                                    <ul className="list_none"> 
                                        <li><a className="dropdown-item nav-link nav_item" href="service.html">Services</a></li> 
                                        <li><a className="dropdown-item nav-link nav_item" href="team.html">Team</a></li>
                                          <li><a className="dropdown-item nav-link nav_item" href="pricing-table.html">Pricing Table</a></li>
                                          <li><a className="dropdown-item nav-link nav_item" href="404.html">404 Page</a></li> 
                                      </ul>
                                  </div>
                          </li>
                          <li className="dropdown animation" data-animation="fadeInDown" data-animation-delay="1.4s">
                            <a className="dropdown-toggle nav-link" href="#" data-toggle="dropdown">Blog</a>
                                <div className="dropdown-menu">
                                    <ul className="list_none"> 
                                        <li><a className="dropdown-item nav-link nav_item" href="blog-right-sidebar.html">Blog Right Sidebar</a></li> 
                                        <li><a className="dropdown-item nav-link nav_item" href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                          <li><a className="dropdown-item nav-link nav_item" href="blog-fullwidth.html">Blog Fullwidth</a></li>
                                          <li><a className="dropdown-item nav-link nav_item" href="single-post-right-sidebar.html">Single Post Right Sidebar</a></li> 
                                          <li><a className="dropdown-item nav-link nav_item" href="single-post-left-sidebar.html">Single Post Left Sidebar</a></li> 
                                          <li><a className="dropdown-item nav-link nav_item" href="single-post-fullwidth.html">Single Post Fullwidth</a></li> 
                                      </ul>
                                  </div>
                          </li>
                          <li className="animation" data-animation="fadeInDown" data-animation-delay="1.5s"><a className="nav-link nav_item" href="faq.html">Faq's</a></li>
                          <li className="animation" data-animation="fadeInDown" data-animation-delay="1.6s"><a className="nav-link nav_item" href="contact.html">Contact</a></li>
                      </ul>
                      <ul className="navbar-nav nav_btn align-items-center">
                          <li className="animation" data-animation="fadeInDown" data-animation-delay="1.7s">
                              <div className="lng_dropdown">
                                <select name="countries" id="lng_select">
                                  <option value='en' data-image="assets/images/eng.png" data-title="English">EN</option>
                                  <option value='fn' data-image="assets/images/fn.png" data-title="France">FN</option>
                                  <option value='us' data-image="assets/images/us.png" data-title="United States">US</option>
                                </select>
                              </div>
                          </li>
                          <li className="animation" data-animation="fadeInDown" data-animation-delay="1.8s"><a className="btn btn-default nav_item" href="login.html">Login</a></li>
                      </ul>
            </div>
          </nav>
        </div>
      </header>
      {/* END HEADER */} 

      {/* START SECTION BANNER */}
      <section className="section_banner blue_light_bg banner_shape" data-z-index="1" data-bleed="-40" data-parallax="scroll" data-image-src="assets/images/home_banner_bg.png">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12 col-sm-12 order-lg-first">
                      <div className="banner_text text_md_center">
                          <h1 className="animation" data-animation="fadeInUp" data-animation-delay="1.1s">Bitcoin is an innovative payment network and a new kind of money.</h1>
                          <p className="animation" data-animation="fadeInUp" data-animation-delay="1.2s">Bitcoin is peer-to-peer electronic money that features low fees and fast transaction times.</p>
                          <div className="btn_group animation" data-animation="fadeInUp" data-animation-delay="1.3s"> 
                              <a href="#whitepaper" className="btn btn-default nav-link content-popup">Whitepaper <i className="ion-ios-arrow-thin-right"></i></a> 
                              <a href="#" className="btn btn-border">Buy Token Now! <i className="ion-ios-arrow-thin-right"></i></a> 
                          </div>
                          <div id="whitepaper" className="team_pop mfp-hide">
                              <div className="row m-0">
                                  <div className="col-md-7">
                                      <div className="pt-3 pb-3">
                                          <div className="title_default_dark title_border"> 
                                              <h4>Download Whitepaper</h4>
                                              <p>A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution.Digital signatures provide part of the solution, but the main benefits are lost if a trusted third party is still required to prevent double-spending.</p>
                                              <p>The network timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work, forming a record that cannot be changed without redoing the proof-of-work.</p>
                          <a href="#" className="btn btn-default">Download Now <i className="ion-ios-arrow-thin-right"></i></a>

                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-5"> 
                                      <img className="pt-3 pb-3" src="assets/images/whitepaper.png" alt="whitepaper"/> 
                                  </div>
                                  
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 order-first">
                      <div className="banner_image_right res_md_mb_50 res_xs_mb_20 animation" data-animation-delay="1.5s" data-animation="fadeInRight"> 
                          <img alt="banner_vector1" src="assets/images/banner_img1.png" /> 
                      </div>
                  </div>
              </div>
              <div className="divider small_divider"></div>
              <div className="row">
                <div className="col-lg-12">
                    <div className="token_rtinfo bg-white-tran box_shadow_none border_right m-0">
                        <div className="row text-center">
                            <div className="col-lg-2 col-md-4 col-6">
                                <div className="token_rt_value token_value_white animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                                    <h3>4.7<span>/5</span></h3>
                                      <p>ICO Bench</p>
                                  </div>
                              </div>
                              <div className="col-lg-2 col-md-4 col-6">
                                <div className="token_rt_value token_value_white animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                    <h3>9.5<span>/5</span></h3>
                                      <p>ICO Marks</p>
                                  </div>
                              </div>
                              <div className="col-lg-2 col-md-4 col-6">
                                <div className="token_rt_value token_value_white animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                    <h3>4.1<span>/5</span></h3>
                                      <p>ICO Bazaar</p>
                                  </div>
                              </div>
                              <div className="col-lg-2 col-md-4 col-6">
                                <div className="token_rt_value token_value_white animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                    <h3>4.0<span>/5</span></h3>
                                      <p>ICO Ranker</p>
                                  </div>
                              </div>
                              <div className="col-lg-2 col-md-4 col-6">
                                <div className="token_rt_value token_value_white animation" data-animation="fadeInUp" data-animation-delay="1s">
                                    <h3>4.6<span>/5</span></h3>
                                      <p>ICO Track</p>
                                  </div>
                              </div>
                              <div className="col-lg-2 col-md-4 col-6">
                                <div className="token_rt_value token_value_white animation" data-animation="fadeInUp" data-animation-delay="1.2s">
                                    <h3>4.3<span>/5</span></h3>
                                      <p>ICO Holder</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="angle_bottom"></div>
      </section>
      {/* END SECTION BANNER */} 

      {/* START SECTION ABOUT */}
      <section className="about_shape_bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
              <div className="title_default_dark title_border text-center">
                        <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">About The Cryptocash</h4>
                        <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Cryptocash is one of the most transformative technologies since the invention of the Internet. Cryptocash stands firmly in support of financial freedom and the liberty that Bitcoin provides globally for anyone to voluntarily participate in a permissionless and decentralized network.</p>
                        <a href="about.html" className="btn btn-info box_shadow animation" data-animation="fadeInUp" data-animation-delay="0.6s">Read More <i className="ion-ios-arrow-thin-right"></i></a>
                  </div>
            </div>
              </div>
              <div className="divider large_divider"></div>
              <div className="row">
                <div className="col-lg-4">
                    <div className="title_default_dark title_border">
                        <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">How It Works?</h4>
                          <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Bitcoin Mining is a peer-to-peer computer process used to secure and verify bitcoin transactions—ayments from one user to another on a decentralized network.</p>
                          <a href="https://www.youtube.com/watch?v=ZE2HxTmxfrI" className="btn btn-default video animation" data-animation="fadeInUp" data-animation-delay="0.6s"><em className="ion-play"></em>Let's Start</a>
                      </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="work_box res_md_mt_20">
                                <div className="work_icon animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                                  <i className="ion ion-android-download"></i>
                                  </div>
                                  <div className="work_inner">
                                    <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.3s">Download a Wallet</h4>
                                      <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Bitcoin is received, stored, and sent using software known as a Bitcoin Wallet. Download the official Bitcoin Wallet for free.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="work_box res_md_mt_20">
                                <div className="work_icon animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                                  <i className="ion-ios-locked"></i>
                                  </div>
                                  <div className="work_inner">
                                    <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.3s">Safe & Secure</h4>
                                      <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">We take careful measures to ensure that your bitcoin is as safe as possible. Offline storage provides an important security measure against theft or loss. </p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="work_box mt-4">
                                <div className="work_icon animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                                  <i className="ion ion-android-cart"></i>
                                  </div>
                                  <div className="work_inner">
                                    <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.3s">Buy & Sell</h4>
                                      <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Blockchain works with exchange partners all around the world to make buying bitcoin in your wallet both a seamless and secure experience.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="work_box mt-4">
                                <div className="work_icon animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                                  <i className="ion-android-exit"></i>
                                  </div>
                                  <div className="work_inner">
                                    <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.3s">A Better User Interface</h4>
                                      <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Bitcoin Core wallet has features most other wallets don't have. But if you don't need them, you can use several other wallets on top of Bitcoin.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="rounded_shape"></div>
      </section>
      {/* END SECTION ABOUT */} 

      {/* START SECTION TOKEN SALE */}
      <section className="section_token blue_light_bg" data-z-index="1" data-bleed="-40" data-parallax="scroll" data-image-src="assets/images/token_bg.png">
        <div className="angle_top"></div>
          <div className="divider large_divider"></div>
          <div className="container">
              <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
                      <div className="title_default_light title_border text-center">
                          <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Token Sale</h4>
                          <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Join the industry leaders to discuss where the markets are heading. We accept token payments. </p>
                      </div>
            </div>
              </div>
              <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <div className="token_sale">
                          <div className="tk_countdown text-center animation token_countdown_bg" data-animation="fadeIn" data-animation-delay="1s">
                              <div className="tk_counter_inner">
                                  <div className="tk_countdown_time animation" data-animation="fadeInUp" data-animation-delay="1.2s" data-time="2019/02/06 00:00:00"></div>
                                  <div className="progress animation" data-animation="fadeInUp" data-animation-delay="1.3s">
                                  <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="46" aria-valuemin="0" aria-valuemax="100" style={{width:"46%"}}> 46% </div>
                                      <span className="progress_label" style={{left: "30%"}}> <strong> 46,000 BCC </strong></span>
                                      <span className="progress_label" style={{left: "75%"}}> <strong> 90,000 BCC </strong></span>
                                      <span className="progress_min_val">Sale Raised</span>
                                      <span className="progress_max_val">Soft-caps</span>
                                  </div>
                                <a href="#" className="btn btn-default animation" data-animation="fadeInUp" data-animation-delay="1.4s">Buy Tokens <i className="ion-ios-arrow-thin-right"></i></a>
                                  <ul className="icon_list list_none d-flex justify-content-center">
                                    <li className="animation" data-animation="fadeInUp" data-animation-delay="1.5s"><i className="fa fa-cc-visa"></i></li>
                                      <li className="animation" data-animation="fadeInUp" data-animation-delay="1.6s"><i className="fa fa-cc-mastercard"></i></li>
                                      <li className="animation" data-animation="fadeInUp" data-animation-delay="1.7s"><i className="fa fa-bitcoin"></i></li>
                                      <li className="animation" data-animation="fadeInUp" data-animation-delay="1.8s"><i className="fa fa-paypal"></i></li>
                                  </ul>                        
                              </div>
                        </div>
                      </div>  
                  </div>
              </div>
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 pl-2 pr-2">
                          <div className="pr_box">
                            <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Starting time :</h6>
                            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Apr 23, 2018 (Mon 10:00 AM)</p>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 pl-2 pr-2">
                        <div className="pr_box">
                            <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.6s">Ending time :</h6>
                            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.8s">Jun 18, 2018 (Mon 12:00 PM)</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 pl-2 pr-2">
                          <div className="pr_box">
                            <h6 className="animation" data-animation="fadeInUp" data-animation-delay="1s">Tokens exchange rate</h6>
                            <p  className="animation" data-animation="fadeInUp" data-animation-delay="1.2s">1 ETH = 820 BCC, 1 BTC = 2150 BCC</p>
                          </div>
                        </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 pl-2 pr-2">
                          <div className="pr_box">
                              <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Low - High 24h :</h6>
                              <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">$ 6,455.83 - $ 7,071.42</p>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 pl-2 pr-2">
                          <div className="pr_box">
                            <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.6s">Total tokens sale</h6>
                            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.8s">850,000 BCC (8%)</p>
                          </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 pl-2 pr-2">
                          <div className="pr_box">
                              <h6 className="animation" data-animation="fadeInUp" data-animation-delay="1s">Acceptable Currency :</h6>
                              <p className="animation" data-animation="fadeInUp" data-animation-delay="1.2s">BTC, Eth, Ltc, XRP</p>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="divider large_divider"></div>
          <div className="angle_bottom"></div>
      </section>
      {/* END SECTION TOKEN SALE */} 

      {/* START SECTION TOKEN PROCEEDS & DISTRIBUTION */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 res_md_mb_40">
                      <div className="title_default_dark title_border text-center">
                          <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Token Sale Proceeds</h4>
                      </div>
                      <div className="lg_pt_20 res_sm_pt_0 text-center animation" data-animation="fadeInRight" data-animation-delay="0.2s"> 
                      <img  src="assets/images/sale-proceeds2.png" alt="sale-proceeds2" /> 
                    </div>
            </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="title_default_dark title_border text-center">
                          <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Token Distribution</h4>
                      </div>
                      <div className="lg_pt_20 res_sm_pt_0 text-center animation" data-animation="fadeInLeft" data-animation-delay="0.2s"> 
                          <img  src="assets/images/distribution2.png" alt="distribution2" /> 
                      </div>
                </div>
              </div>    
        </div>
      </section>
      {/* END SECTION TOKEN PROCEEDS & DISTRIBUTION */} 

      {/* START SECTION TIMELINE */}
      <section className="blue_light_bg" data-bleed="-40" data-z-index="1" data-parallax="scroll" data-image-src="assets/images/roadmap_bg.png">
        <div className="angle_top"></div>
          <div className="divider large_divider"></div>
          <div className="container">
          <div className="row text-center">
            <div className="col-lg-8 col-md-12 offset-lg-2">
              <div className="title_default_light title_border text-center">
                <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Roadmap</h4>
                <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">The use of crypto-currencies has become more widespread, and they are now increasingly accepted as a legitimate currency for transactions.</p>
              </div>
            </div>
          </div>
          </div>
          <div className="container-fluid">
          <div className="row roadmap_list small_space align-items-end">
              <div className="col-lg">
                <div className="single_roadmap roadmap_done">
                    <div className="roadmap_icon"></div>
                      <h6 className="animation" data-animation="fadeInDown" data-animation-delay="0.2s">April 2018</h6>
                      <p className="animation" data-animation="fadeInUp" data-animation-delay="0.3s">Inotial Coin Distribution & maketing </p>
                  </div>
              </div>
              <div className="col-lg">
                <div className="single_roadmap roadmap_done">
                    <div className="roadmap_icon"></div>
                    <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">February 2018</h6>
                    <p className="animation" data-animation="fadeInDown" data-animation-delay="0.2s">Exchange Bitcontent to Bitcoin</p>
                  </div>
              </div>
              <div className="col-lg">
                <div className="single_roadmap">
                      <div className="roadmap_icon"></div>
                      <h6 className="animation" data-animation="fadeInDown" data-animation-delay="0.2s">March 2018</h6>
                      <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">BTCC mode of payment in Bitconcent</p>
                  </div>
              </div>
              <div className="col-lg">
                <div className="single_roadmap">
                      <div className="roadmap_icon"></div>
                      <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">June 2018</h6>
                      <p className="animation" data-animation="fadeInDown" data-animation-delay="0.2s">Send-Receive coin Bitconcent & mobile</p>
                  </div>
              </div>
              <div className="col-lg">
                <div className="single_roadmap">
                      <div className="roadmap_icon"></div>
                      <h6 className="animation" data-animation="fadeInDown" data-animation-delay="0.2s">October 2018</h6>
                      <p className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Coin Marketcap, World Coin Index</p>
                  </div>
              </div>
              <div className="col-lg">
                <div className="single_roadmap">
                      <div className="roadmap_icon"></div>
                      <h6 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">December 2018</h6>
                      <p className="animation" data-animation="fadeInDown" data-animation-delay="0.2s">Online & Trading ICO Token Sale</p>
                  </div>
              </div>
          </div>
          </div>
          <div className="divider large_divider"></div>
          <div className="angle_bottom"></div>
      </section>
      {/* END SECTION TIMELINE */} 

      {/* SECTION MOBILE APP */}
      <section data-parallax="scroll" data-image-src="assets/images/app_bg.png">
        <div className="container">
            <div className="row align-items-center">
                  <div className="col-lg-7 col-md-12 col-sm-12">
                    <div className="title_default_dark title_border text_md_center">
                      <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Download Mobile App</h4>
                      <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">The use of crypto-currencies has become more widespread, and they are now increasingly accepted as a legitimate currency for transactions. Bitcoin is the first ever cryptocurrency and is used like other assets in exchange for goods and services.</p>
                      <p className="animation" data-animation="fadeInUp" data-animation-delay="0.6s">Send, receive, and exchange Bitcoin, Ethereum, & Bitcoin Cash instantly with anyone in the world. Securely buy and sell bitcoin alongside your already safely stored cryptocurrency. </p>
                    </div>
                    <div className="btn_group text_md_center animation" data-animation="fadeInUp" data-animation-delay="0.8s"> 
                      <a href="#" className="btn btn-default"><em className="ion-social-android"></em>Google Store </a> 
                      <a href="#" className="btn btn-default"><em className="ion-social-apple"></em>Apple Store</a> 
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12 col-sm-12">
                      <div className="res_md_mt_50 res_sm_mt_20 text-center animation" data-animation="fadeInRight" data-animation-delay="0.2s"> 
                          <img src="assets/images/mobile_app.png" alt="mobile_app"/> 
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/* END SECTION MOBILE APP */}

      {/* START SECTION TEAM */}
      <section className="section_team bg_gray">
        <div className="angle_top"></div>
          <div className="divider large_divider"></div>
          <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-12 offset-lg-2">
                  <div className="title_default_dark title_border text-center">
                    <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Leadership Team</h4>
                    <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">we are proud of our great team. He is one of the most motivated and enthusiastic people we have, and is always ready and willing to help out where needed. </p>
                  </div>
                </div>
              </div>
              <div className="row small_space">
                  <div className="col-lg-3 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
                      <div className="bg-white radius_box team_box_s3 animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                          <div className="text-center"> 
                            <img src="assets/images/placeholder9.png" alt="placeholder9"/>
                            <div className="team_social_s2 list_none">
                              <ul>
                                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                  <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                              </ul>
                          </div>
                          </div>
                          <div className="team_info text-center">
                              <h4><a href="#team1" className="content-popup">Derek Castro</a></h4>
                              <p>Head Of Marketing</p>
                          </div>
                          <div id="team1" className="team_pop mfp-hide">
                              <div className="row m-0">
                                  <div className="col-md-4 text-center"> 
                                    <div className="team_img_wrap">
                                          <img className="w-100" src="assets/images/placeholder3.jpg" alt="user_img-lg"/> 
                                          <div className="team_title">
                                              <h4>Derek Castro</h4>
                                              <span>Head Of Marketing</span>
                                          </div>
                                      </div>
                                      <div className="social_single_team list_none mt-3">
                                          <ul>
                                              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                              <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-md-8">
                                      <div className="pt-3">
                                          <h5>About</h5>
                                          <hr />
                                          <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                          <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
                      <div className="bg-white radius_box team_box_s3 animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                          <div className="text-center"> 
                            <img src="assets/images/placeholder9.png" alt="placeholder9"/>
                            <div className="team_social_s2 list_none">
                              <ul>
                                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                  <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                              </ul>
                          </div>
                          </div>
                          <div className="team_info text-center">
                              <h4><a href="#team2" className="content-popup">Jessica Bell</a></h4>
                              <p>Head Of Sale</p>
                          </div>
                          <div id="team2" className="team_pop mfp-hide">
                              <div className="row m-0">
                                  <div className="col-md-4 text-center"> 
                                    <div className="team_img_wrap">
                                        <img className="w-100" src="assets/images/placeholder3.jpg" alt="user_img-lg"/> 
                                          <div className="team_title"> 
                                              <h4>Jessica Bell</h4>
                                              <span>Head Of Sale</span>
                                          </div>
                                      </div>
                                      <div className="social_single_team list_none mt-3">
                                          <ul>
                                              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                              <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div className="col-md-8">
                                      <div className="pt-3">
                                          <h5>About</h5>
                                          <hr />
                                          <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                          <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
                      <div className="bg-white radius_box team_box_s3 animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                          <div className="text-center"> 
                            <img src="assets/images/placeholder9.png" alt="placeholder9"/>
                            <div className="team_social_s2 list_none">
                              <ul>
                                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                  <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                              </ul>
                          </div>
                          </div>
                          <div className="team_info text-center">
                              <h4><a href="#team3" className="content-popup">Alvaro Martin</a></h4>
                              <p>Blockchain App Developer</p>
                          </div>
                          <div id="team3" className="team_pop mfp-hide">
                              <div className="row m-0">
                                  <div className="col-md-4 text-center"> 
                                    <div className="team_img_wrap">
                                        <img className="w-100" src="assets/images/placeholder3.jpg" alt="user_img-lg"/> 
                                          <div className="team_title"> 
                                              <h4>Alvaro Martin</h4>
                                              <span>Blockchain App Developer</span>
                                          </div>
                                      </div>
                                      <div className="social_single_team list_none mt-3">
                                              <ul>
                                                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                  <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                              </ul>
                                          </div>
                                  </div>
                                  <div className="col-md-8">
                                      <div className="pt-3">
                                          <h5>About</h5>
                                          <hr />
                                          <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                          <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="bg-white radius_box team_box_s3 animation" data-animation="fadeInUp" data-animation-delay="1s">
                          <div className="text-center"> 
                            <img src="assets/images/placeholder9.png" alt="placeholder9"/>
                            <div className="team_social_s2 list_none">
                              <ul>
                                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                  <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                              </ul>
                          </div>
                          </div>
                          <div className="team_info text-center">
                              <h4><a href="#team4" className="content-popup">Maria Willium</a></h4>
                              <p>Community Manager</p>
                          </div>
                          <div id="team4" className="team_pop mfp-hide">
                              <div className="row m-0">
                                  <div className="col-md-4 text-center">
                                    <div className="team_img_wrap">
                                        <img className="w-100" src="assets/images/placeholder3.jpg" alt="user_img-lg"/>
                                          <div className="team_title"> 
                                              <h4>Maria Willium</h4>
                                              <span>Community Manager</span>
                                          </div>
                                      </div>
                                      <div className="social_single_team list_none mt-3">
                                              <ul>
                                                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                  <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                              </ul>
                                          </div> 
                                  </div>
                                  <div className="col-md-8">
                                      <div className="pt-3">
                                          <h5>About</h5>
                                          <hr />
                                          <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                          <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            <div className="divider large_divider"></div>
              <div className="row">
                <div className="col-md-12">
                  <div className="title_default_dark title_border text-center">
                    <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Invester Board</h4>
                  </div>
                </div>
              </div>
              <div className="row small_space justify-content-center">
                <div className="col-lg-9 col-md-12">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
                      <div className="bg-white radius_box team_box_s3 animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                          <div className="text-center"> 
                            <img src="assets/images/placeholder9.png" alt="placeholder9"/>
                            <div className="team_social_s2 list_none">
                              <ul>
                                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                  <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                              </ul>
                          </div>
                          </div>
                          <div className="team_info text-center">
                              <h4><a href="#team5" className="content-popup">Tricia Diyana</a></h4>
                              <p>Invester</p>
                          </div>
                          <div id="team5" className="team_pop mfp-hide">
                              <div className="row m-0">
                                  <div className="col-md-4 text-center"> 
                                    <div className="team_img_wrap">
                                        <img className="w-100" src="assets/images/placeholder3.jpg" alt="user_img-lg"/>
                                          <div className="team_title"> 
                                              <h4>Tricia Diyana</h4>
                                              <span>Invester</span>
                                          </div> 
                                      </div>
                                      <div className="social_single_team list_none mt-3">
                                              <ul>
                                                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                  <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                              </ul>
                                          </div>
                                  </div>
                                  <div className="col-md-8">
                                      <div className="pt-3">
                                          <h5>About</h5>
                                          <hr />
                                          <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                          <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
                      <div className="bg-white radius_box team_box_s3 animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                          <div className="text-center"> 
                            <img src="assets/images/placeholder9.png" alt="placeholder9"/>
                            <div className="team_social_s2 list_none">
                              <ul>
                                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                  <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                              </ul>
                          </div>
                          </div>
                          <div className="team_info text-center">
                              <h4><a href="#team6" className="content-popup">Kent Pierce</a></h4>
                              <p>Invester</p>
                          </div>
                          <div id="team6" className="team_pop mfp-hide">
                              <div className="row m-0">
                                  <div className="col-md-4 text-center"> 
                                    <div className="team_img_wrap">
                                        <img className="w-100" src="assets/images/placeholder3.jpg" alt="user_img-lg"/>
                                          <div className="team_title"> 
                                              <h4>Kent Pierce</h4>
                                              <span>Invester</span>
                                          </div> 
                                      </div>
                                      <div className="social_single_team list_none mt-3">
                                              <ul>
                                                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                  <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                              </ul>
                                          </div>
                                  </div>
                                  <div className="col-md-8">
                                      <div className="pt-3">
                                          <h5>About</h5>
                                          <hr />
                                          <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                          <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                    </div>
                    <div className="col-lg-4 offset-lg-0 col-md-6 offset-md-3 col-sm-6 offset-sm-3">
                      <div className="bg-white radius_box team_box_s3 animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                          <div className="text-center"> 
                            <img src="assets/images/placeholder9.png" alt="placeholder9"/>
                            <div className="team_social_s2 list_none">
                              <ul>
                                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                  <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                              </ul>
                          </div>
                          </div>
                          <div className="team_info text-center">
                              <h4><a href="#team7" className="content-popup">Rose Morgen</a></h4>
                              <p>Invester</p>
                          </div>
                          <div id="team7" className="team_pop mfp-hide">
                              <div className="row m-0">
                                  <div className="col-md-4 text-center"> 
                                    <div className="team_img_wrap">
                                        <img className="w-100" src="assets/images/placeholder3.jpg" alt="user_img-lg"/> 
                                        <div className="team_title"> 
                                              <h4>Rose Morgen</h4>
                                              <span>Invester</span>
                                          </div>
                                      </div>
                                      <div className="social_single_team list_none mt-3">
                                              <ul>
                                                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                  <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                              </ul>
                                          </div>
                                  </div>
                                  <div className="col-md-8">
                                      <div className="pt-3">
                                          <h5>About</h5>
                                          <hr />
                                          <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                          <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider small_divider"></div>
              <div className="row">
                <div className="col-md-12 text-center">
                    <a href="team.html" className="btn btn-default animation" data-animation="fadeInUp" data-animation-delay="0.2s">View All Team <i className="ion-ios-arrow-thin-right"></i></a>
                  </div>
              </div>
          </div>
          <div className="divider large_divider"></div>
          <div className="angle_bottom"></div>
      </section>
      {/* END SECTION TEAM */} 

      {/* START SECTION FAQ */}
      <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12 offset-lg-2">
                    <div className="title_default_dark title_border text-center">
                      <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Have Any Questions?</h4>
                      <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Frequently asked questions (FAQ) or Questions and Answers (Q&A), are listed questions and answers, all supposed to be commonly asked in some context</p>
                    </div>
                  </div>
              </div>
              <div className="row small_space">
                <div className="col-lg-8 col-md-12 offset-lg-2">
                    <div id="accordion" className="faq_question">
                      <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                        <div className="card-header" id="headingOne">
                          <h6 className="mb-0"> <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">What is cryptocurrency?</a> </h6>
                        </div>
                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                          <div className="card-body"> The best cryptocurrency to buy is one we are willing to hold onto even if it goes down. For example, I believe in Steem enough that I am willing to hold it even if it goes down 99% and would start buying more of it if the price dropped.</div>
                        </div>
                      </div>
                      <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                        <div className="card-header" id="headingTwo">
                          <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Which cryptocurrency is best to buy today?</a> </h6>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                          <div className="card-body"> The best cryptocurrency to buy is one we are willing to hold onto even if it goes down. For example, I believe in Steem enough that I am willing to hold it even if it goes down 99% and would start buying more of it if the price dropped.</div>
                        </div>
                      </div>
                      <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                        <div className="card-header" id="headingThree">
                          <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">How about day trading crypto?</a> </h6>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                          <div className="card-body"> While profits are possible trading cryptocurrencies, so are losses. My first year involved me spending hundreds of hours trading Bitcoin with a result of losing over $5,000 with nothing to show for it. Simply trading digital currencies is very similar to gambling because no one really knows what is going to happen next although anyone can guess! While I was lucky to do nothing expect lose money when I started, the worst thing that can happen is to get lucky right away and get a big ego about what an amazing cryptocurrency trader we are. </div>
                        </div>
                      </div>
                      <div className="card animation" data-animation="fadeInUp" data-animation-delay="1s">
                        <div className="card-header" id="headingFour">
                          <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">When to sell a cryptocurrency?</a> </h6>
                        </div>
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                          <div className="card-body"> Before Steem I was all in an another altcoin and really excited about it. When I first bought the price was low and made payments to me every week just for holding it. As I tried to participate in the community over the next several months, I was consistently met with a mix of excitement and hostility. When I began talking openly about this, the negative emotions won over in the community and in me. Originally I had invested and been happy to hold no matter what the price which quickly went up after I bought it. </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </section>
      {/* END SECTION FAQ */}

      {/* START SECTION BLOG */}
      <section className="blue_light_bg" data-bleed="-40" data-z-index="1" data-parallax="scroll" data-image-src="assets/images/roadmap_bg.png">
          <div className="angle_top"></div>
          <div className="divider large_divider"></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12 offset-lg-2">
                    <div className="title_default_light title_border text-center">
                      <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Latest News</h4>
                    </div>
                  </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="blog_item animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                          <div className="blog_img">
                              <a href="#">
                                  <img src="assets/images/placeholder1.jpg" alt="placeholder1" />
                              </a>
                          </div>
                          <div className="blog_content">
                            <div className="blog_text">
                                  <h6 className="blog_title"><a href="#">Bitcoin Price Slightly Recovers as Ripple Market Cap</a></h6>
                                  <p>The crypto markets continued to build on April's gains this week, with alternative cryptocurrencies like nano, VeChain and bytecoin leading the way.</p>
                                  <a href="#" className="text-capitalize">Read More</a>
                              </div>
                              <ul className="list_none blog_meta">
                                  <li><a href="#"><i className="ion-android-time"></i> April 14, 2018</a></li>
                                  <li><a href="#"><i className="ion-android-chat"></i> 2 Comment</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="blog_item animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                          <div className="blog_img">
                              <a href="#">
                                  <img src="assets/images/placeholder1.jpg" alt="placeholder1" />
                              </a>
                          </div>
                          <div className="blog_content">
                            <div className="blog_text">
                                  <h6 className="blog_title"><a href="#">The Year Cryptocurrencies Seized the Mainstream Spotlightp</a></h6>
                                  <p>The crypto markets continued to build on April's gains this week, with alternative cryptocurrencies like nano, VeChain and bytecoin leading the way.</p>
                                  <a href="#" className="text-capitalize">Read More</a>
                              </div>
                              <ul className="list_none blog_meta">
                                  <li><a href="#"><i className="ion-android-time"></i> April 14, 2018</a></li>
                                  <li><a href="#"><i className="ion-android-chat"></i> 2 Comment</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 offset-lg-0 col-md-6 offset-md-3">
                    <div className="blog_item animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                          <div className="blog_img">
                              <a href="#">
                                  <img src="assets/images/placeholder1.jpg" alt="placeholder1" />
                              </a>
                          </div>
                          <div className="blog_content">
                            <div className="blog_text">
                                  <h6 className="blog_title"><a href="#">Bitcoin Facing Decisive Year in 2018, Says Legendary Investor</a></h6>
                                  <p>The crypto markets continued to build on April's gains this week, with alternative cryptocurrencies like nano, VeChain and bytecoin leading the way.</p>
                                  <a href="#" className="text-capitalize">Read More</a>
                              </div>
                              <ul className="list_none blog_meta">
                                  <li><a href="#"><i className="ion-android-time"></i> April 14, 2018</a></li>
                                  <li><a href="#"><i className="ion-android-chat"></i> 2 Comment</a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="divider small_divider"></div>
              <div className="row">
                <div className="col-md-12 text-center">
                    <a href="blog-right-sidebar.html" className="btn btn-default animation" data-animation="fadeInUp" data-animation-delay="0.2s">View All News <i className="ion-ios-arrow-thin-right"></i></a>
                  </div>
              </div>
          </div>
          <div className="divider large_divider"></div>
          <div className="angle_bottom"></div>
      </section>
      {/* END SECTION BLOG */}

      {/* START SECTION CONTACT */}
      <section className="contact_section" data-parallax="scroll" data-image-src="assets/images/app_bg.png">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12 offset-lg-2">
                    <div className="title_default_dark title_border text-center">
                      <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Contact With Us!</h4>
                    </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-8 offset-lg-2 col-md-12 pr-0 res_md_pr_15">
                    <div className="lg_pt_20 res_sm_pt_0">
                          <ul className="list_none contact_info info_contact text-center">
                              <li className="animation" data-animation="fadeInUp" data-animation-delay="0.2s"> 
                                <i className="ion-ios-location"></i>
                                  <div className="contact_detail"> <span>Address</span>
                                    <p>4 Montgomery, NY 12549 </p>
                                  </div>
                              </li>
                              <li className="animation" data-animation="fadeInUp" data-animation-delay="0.5s"> 
                                <i className="ion-android-call"></i>
                                  <div className="contact_detail"> <span>Phone</span>
                                    <p>+23 0123 4567</p>
                                  </div>
                              </li>
                              <li className="animation" data-animation="fadeInUp" data-animation-delay="0.8s"> 
                                <i className="ion-ios-email"></i>
                                  <div className="contact_detail"> <span>Email-id</span>
                                    <p>Yourmail@gmail.com</p>
                                  </div>
                              </li>
                        </ul> 
                      </div>
                  </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="lg_pt_20">
                      <div className="row">
                        <div className="col-md-7">
                              <form method="post" name="enq" className="field_form_s2">
                                  <div className="row">
                                    <div className="form-group col-md-6 animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                        <input type="text" required="required" placeholder="Enter Name *" id="first-name" className="form-control" name="name"></input>
                                     </div>
                                      <div className="form-group col-md-6 animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                        <input type="email" required="required" placeholder="Enter Email *" id="email" className="form-control" name="email"></input>
                                      </div>
                                      <div className="form-group col-md-6 animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                        <input type="text" required="required" placeholder="Enter Subject" id="subject" className="form-control" name="subject"></input>
                                      </div>
                                      <div className="form-group col-md-6 animation" data-animation="fadeInUp" data-animation-delay="1s">
                                        <input type="text" placeholder="Enter Phone No." id="phone" className="form-control" name="phone"></input>
                                      </div>
                                      <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="1.2s">
                                        <textarea required="required" placeholder="Message *" id="description" className="form-control" name="message" rows="3"></textarea>
                                      </div>
                                      <div className="col-md-12 text-center animation" data-animation="fadeInUp" data-animation-delay="1.4s">
                                        <button type="submit" title="Submit Your Message!" className="btn btn-default btn-block" id="submitButton" name="submit" value="Submit">Submit <i className="ion-ios-arrow-thin-right"></i></button>
                                      </div>
                                      <div className="col-md-12">
                                        <div id="alert-msg" className="alert-msg text-center"></div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                          <div className="col-md-5">  
                            <div id="map" className="contact_map animation res_sm_mt_20" data-animation="fadeInUp" data-animation-delay="1.2s"></div>
                          </div>
                      </div>
                      </div>
                  </div>
              </div>
        </div>
      </section>
      {/* END SECTION CONTACT */} 

      {/* START CLIENTS SECTION */}
      <section className="client_logo small_pt small_pb">
          <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="title_default_dark title_border text-center">
                    <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Our Sponsers</h4>
                  </div>
                </div>
              </div>
              <div className="row align-items-center text-center overflow_hide small_space">
                  <div className="col-lg-3 col-md-4 col-6 logo_border">
                    <div className="d-flex flex-wrap align-items-center justify-content-center h-100 animation" data-animation="fadeInUp" data-animation-delay="0.3s"> 
                        <img src="assets/images/client_logo_dark_gray1.png" alt="client_logo_dark_gray1" /> 
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6 logo_border">
                    <div className="d-flex flex-wrap align-items-center justify-content-center h-100 animation" data-animation="fadeInUp" data-animation-delay="0.4s"> 
                        <img src="assets/images/client_logo_dark_gray2.png" alt="client_logo_dark_gray2" /> 
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6 logo_border">
                    <div className="d-flex flex-wrap align-items-center justify-content-center h-100 animation" data-animation="fadeInUp" data-animation-delay="0.5s"> 
                        <img src="assets/images/client_logo_dark_gray3.png" alt="client_logo_dark_gray3" /> 
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6 logo_border">
                    <div className="d-flex flex-wrap align-items-center justify-content-center h-100 animation" data-animation="fadeInUp" data-animation-delay="0.6s"> 
                        <img src="assets/images/client_logo_dark_gray4.png" alt="client_logo_dark_gray4" /> 
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6 logo_border">
                    <div className="d-flex flex-wrap align-items-center justify-content-center h-100 animation" data-animation="fadeInUp" data-animation-delay="0.7s"> 
                        <img src="assets/images/client_logo_dark_gray5.png" alt="client_logo_dark_gray5" /> 
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6 logo_border">
                    <div className="d-flex flex-wrap align-items-center justify-content-center h-100 animation" data-animation="fadeInUp" data-animation-delay="0.8s"> 
                        <img src="assets/images/client_logo_dark_gray6.png" alt="client_logo_dark_gray6" /> 
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6 logo_border">
                    <div className="d-flex flex-wrap align-items-center justify-content-center h-100 animation" data-animation="fadeInUp" data-animation-delay="0.9s"> 
                        <img src="assets/images/client_logo_dark_gray7.png" alt="client_logo_dark_gray7" /> 
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6 logo_border">
                    <div className="d-flex flex-wrap align-items-center justify-content-center h-100 animation" data-animation="fadeInUp" data-animation-delay="1s"> 
                        <img src="assets/images/client_logo_dark_gray8.png" alt="client_logo_dark_gray8" /> 
                      </div>
                  </div>
              </div>
          </div>
      </section>
      {/* END CLIENTS SECTION */}

      {/* START FOOTER SECTION */}
      <footer>
        <div className="top_footer blue_light_bg" data-z-index="1" data-parallax="scroll" data-image-src="assets/images/footer_bg.png">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                        <div className="newsletter_form">
                              <h4 className="footer_title border_title animation" data-animation="fadeInUp" data-animation-delay="0.2s">Newsletter</h4>
                              <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">By subscribing to our mailing list you will always be update with the latest news from us.</p>
                              <form className="subscribe_form animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                  <input className="input-rounded" type="text" required placeholder="Enter Email Address"/>
                                <button type="submit" title="Subscribe" className="btn-info" name="submit" value="Submit"> Subscribe </button>
                              </form>
                          </div>
                      </div>
                      <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-8 res_md_mt_30 res_sm_mt_20">
                        <h4 className="footer_title border_title animation" data-animation="fadeInUp" data-animation-delay="0.2s">Quick Links</h4>
                          <ul className="footer_link half_link list_none res_sm_mb_30">
                            <li className="animation" data-animation="fadeInUp" data-animation-delay="0.2s"><a href="#">Cryptocash ICO</a></li>
                              <li className="animation" data-animation="fadeInUp" data-animation-delay="0.3s"><a href="#">Team</a></li>
                              <li className="animation" data-animation="fadeInUp" data-animation-delay="0.3s"><a href="#">How It Works</a></li>
                              <li className="animation" data-animation="fadeInUp" data-animation-delay="0.3s"><a href="#">Whitepaper</a></li>
                              <li className="animation" data-animation="fadeInUp" data-animation-delay="0.4s"><a href="#">Tokens</a></li>
                              <li className="animation" data-animation="fadeInUp" data-animation-delay="0.5s"><a href="#">FAQ</a></li>
                              <li className="animation" data-animation="fadeInUp" data-animation-delay="0.3s"><a href="#">Road map</a></li>
                              <li className="animation" data-animation="fadeInUp" data-animation-delay="0.6s"><a href="#">Contact</a></li>
                          </ul>
                      </div>
                      <div className="col-lg-2 offset-lg-1 col-md-6 col-sm-4 res_md_mt_30 res_sm_mt_20">
                        <h4 className="footer_title border_title animation" data-animation="fadeInUp" data-animation-delay="0.2s">Social</h4>
                          <ul className="footer_social list_none">
                            <li className="animation" data-animation="fadeInUp" data-animation-delay="0.2s"><a href="#"><i className="ion-social-facebook"></i> Facebook</a></li>
                              <li className="animation" data-animation="fadeInUp" data-animation-delay="0.3s"><a href="#"><i className="ion-social-twitter"></i> Twitter</a></li>
                              <li className="animation" data-animation="fadeInUp" data-animation-delay="0.4s"><a href="#"><i className="ion-social-googleplus"></i> Google Plus</a></li>
                              <li className="animation" data-animation="fadeInUp" data-animation-delay="0.5s"><a href="#"><i className="ion-social-pinterest"></i> Pintrest</a></li>
                              <li className="animation" data-animation="fadeInUp" data-animation-delay="0.6s"><a href="#"><i className="ion-social-instagram-outline"></i> Instagram</a></li>
                          </ul>
                      </div>
                      
                </div>
            </div>
          </div>
          <div className="bottom_footer">
              <div className="container">
                <div className="row">
                      <div className="col-md-6">
                        <p className="copyright">Copyright &copy; 2018 All Rights Reserved.</p>
                      </div>
                  <div className="col-md-6">
                    <ul className="list_none footer_menu">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                      </ul>
                  </div>
                </div>
              </div>
          </div>
      </footer>
      {/* END FOOTER SECTION */}

      <a href="#" className="scrollup btn-default"><i className="ion-ios-arrow-up"></i></a> 
    </>
  );
};

export default withResizeDetector(App);

import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Image from 'next/image';
import BreakingImg from "../../public/BreakingImg.png";
import Latest1 from '../../public/latest_1.png';
import Latest2 from '../../public/latest_2.png';
import Latest3 from '../../public/latest_3.png';
import Arrow from '../../public/arrow.PNG';
import Subscribe from '../../public/subscribe_1.png';


const BreakingNews = () => {
   
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.min.js')
            .then(() => {
                // Bootstrap JS has been loaded successfully
            })
            .catch((error) => {
                console.error('Error loading Bootstrap JS:', error);
            });

      

    }, []);
    
   
    return (
        <>


        
            <section className="breaking_news_section">
                <div className="container">
                    <div className="row align-content-center">
                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                            <div className="row pt-5 align-items-center">
                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                    <div className="categaoryheading">
                                        <h2>Breaking News<span>Headline goes here...</span></h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea.{" "}
                                        </p>

                                    </div>
                                    <div className="breaking_specs">
                                        <p>World news</p>
                                        <p className="dots">•</p>
                                        <p>12 December 2023</p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5">
                                    <div className="breakingnewsimg">
                                        <Image src={BreakingImg} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <div className="latest-news-siderbar">
                                <div className="lns-head">
                                    <h3>Latest</h3>
                                    <h6>
                                        <Link href='CategoryListing'> Show more <i className="fa-solid fa-arrow-right-long" /></Link>

                                    </h6>
                                </div>
                                <div className="lns-body">
                                    <div className="lns-item">
                                        <div>
                                            <Image src={Latest1} alt="" />
                                        </div>
                                        <div className="lns-item-right">
                                            <h4>Impact of New COVID-19 Variants News</h4>
                                            <div className="lns_specs">
                                                <p>renatta Christie</p>
                                                <p className="dots">•</p>
                                                <p className="light_grey">sep 17th 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lns-item">
                                        <div>
                                            <Image src={Latest2} alt="" />
                                        </div>
                                        <div className="lns-item-right">
                                            <h4>Impact on the Growth of the local Buisness Sector</h4>
                                            <div className="lns_specs">
                                                <p>renatta Christie</p>
                                                <p className="dots">•</p>
                                                <p className="light_grey">sep 17th 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lns-item">
                                        <div>
                                            <Image src={Latest3} alt="" />
                                        </div>
                                        <div className="lns-item-right">
                                            <h4>Impact on the Growth of the local Buisness Sector</h4>
                                            <div className="lns_specs">
                                                <p>renatta Christie</p>
                                                <p className="dots">•</p>
                                                <p className="light_grey">sep 17th 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="subcribe_container">
                        <div className="row">
                            <div className="col-12 col-md-10 col-lg-6">

                                <div className="subc">
                                    <div className="subc_inner">
                                        <div className="row align-items-center">
                                            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                <div className="arrowimg">
                                                    <Image src={Arrow} alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                                                <div className="registertext">
                                                    <h3 id="textchange">Register Now</h3>
                                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                     
                                                        <li className="nav-item" role="presentation">
                                                            <button
                                                                className="nav-link active"
                                                                id="home-tab"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#home-tab-pane"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="home-tab-pane"
                                                                aria-selected="true"
                                                            >
                                                                Free
                                                            </button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button
                                                                className="nav-link"
                                                                id="profile-tab"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#profile-tab-pane"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="profile-tab-pane"
                                                                aria-selected="false"
                                                            >
                                                                PREMIUM
                                                            </button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button
                                                                className="nav-link"
                                                                id="contact-tab"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#contact-tab-pane"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="contact-tab-pane"
                                                                aria-selected="false"
                                                            >
                                                                PRO
                                                            </button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button
                                                                className="nav-link"
                                                                id="PRO-tab"
                                                                data-bs-toggle="tab"
                                                                data-bs-target="#PRO-tab-pane"
                                                                type="button"
                                                                role="tab"
                                                                aria-controls="PRO-tab-pane"
                                                                aria-selected="false"
                                                            >
                                                                PRO+
                                                            </button>
                                                        </li>

                                                    </ul>
                                                    <div className="tab-content" id="myTabContent">
                                                        <div
                                                            className="tab-pane fade show active"
                                                            id="home-tab-pane"
                                                            role="tabpanel"
                                                            aria-labelledby="home-tab"
                                                            tabIndex={0}
                                                        >
                                                            <div className="rigistercontent">
                                                                <p>Try out these features for Free: watchlist with alerts,news  alerts and pinboard</p>
                                                                <button className="rigisterbtn" data-bs-toggle="modal" data-bs-target="#exampleModal4">View features</button>
                                                                <div className='clearfix'></div>




                                                                <div className="row pt-3">
                                                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                                        <form>


                                                                            <input type="text" placeholder="Enter Your Name" className='form-control' />




                                                                            <input type="email" placeholder="Enter Your Email" className='form-control' />

                                                                            <button type="submit" className="btnlist">Submit <i className="fa-sharp fa-solid fa-angles-right"></i></button>
                                                                        </form>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div
                                                            className="tab-pane fade"
                                                            id="profile-tab-pane"
                                                            role="tabpanel"
                                                            aria-labelledby="profile-tab"
                                                            tabIndex={0}
                                                        >
                                                            <div className="rigistercontent">
                                                                <p>for full access at into Price</p>
                                                                <span>Only <strong>$9.99</strong> per month</span><br></br>
                                                                <span>Only <strong>$109.89</strong> per year per year (pay 11 month Only)</span>
                                                                <button className="rigisterbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">View features</button>
                                                                <div className="clearfix"></div>
                                                                <div className="row pt-3">
                                                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                                        <form>


                                                                            <input type="text" placeholder="Enter Your Name" className='form-control' />




                                                                            <input type="email" placeholder="Enter Your Email" className='form-control' />

                                                                            <button type="submit" className="btnlist">Submit <i className="fa-sharp fa-solid fa-angles-right"></i></button>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="tab-pane fade"
                                                            id="contact-tab-pane"
                                                            role="tabpanel"
                                                            aria-labelledby="contact-tab"
                                                            tabIndex={0}
                                                        >
                                                            <div className="rigistercontent">
                                                                <p>for extended access at into Price</p>
                                                                <span>Only <strong>$24.99</strong> per month</span><br></br>
                                                                <span>Only <strong>$247.89</strong> per year (pay 11 month Only)</span>
                                                                <button className="rigisterbtn" data-bs-toggle="modal" data-bs-target="#exampleModal1">View features</button>
                                                                <div className="clearfix"></div>
                                                                <div className="row pt-3">
                                                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                                        <form>


                                                                            <input type="text" placeholder="Enter Your Name" className='form-control' />




                                                                            <input type="email" placeholder="Enter Your Email" className='form-control' />

                                                                            <button type="submit" className="btnlist">Submit <i className="fa-sharp fa-solid fa-angles-right"></i></button>
                                                                        </form>

                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div
                                                            className="tab-pane fade"
                                                            id="PRO-tab-pane"
                                                            role="tabpanel"
                                                            aria-labelledby="PRO-tab"
                                                            tabIndex={0}
                                                        >
                                                            <div className="rigistercontent">
                                                                <p><Link href='tel:+4256144636'>Call us</Link> for enterprise license</p>

                                                                <button className="rigisterbtn" data-bs-toggle="modal" data-bs-target="#exampleModal2">View features</button>
                                                                <div className="clearfix"></div>
                                                                <div className="row pt-3">
                                                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                                        <form>


                                                                            <input type="text" placeholder="Enter Your Name" className='form-control' />




                                                                            <input type="email" placeholder="Enter Your Email" className='form-control' />

                                                                            <button type="submit" className="btnlist">Submit <i className="fa-sharp fa-solid fa-angles-right"></i></button>
                                                                        </form>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-10 col-lg-6">
                                <div className="subc">
                                    <div className="subc_inner">
                                        <div className="row align-items-center">
                                            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                                <div className="arrowimg">
                                                    <Image src={Subscribe} alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                                                <div className="registertext">
                                                    <h3>Download <span>Notes&NoteBooks</span></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div
                className="modal fade"
                id="exampleModal4"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="subscribesec">
                                <div className="subscribebox">
                                    <p>Free has all the PRO features including Notes & Notebooks browser extension</p>
                                    <ul>
                                        <li>

                                            <p> <i className="fa-sharp fa-solid fa-angles-right"></i><strong>Free watchlist</strong> is limited to 50  companies</p>
                                        </li>
                                        <li>

                                            <p> <i className="fa-sharp fa-solid fa-angles-right"></i><strong>Free pinboard</strong>has only 3 notebooks with 3 notes each</p>
                                        </li>
                                    </ul>
                                    <button className="rigisterbtn" data-bs-toggle="modal" data-bs-target="#exampleModal3">Subscribe</button>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Modal */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="subscribesec">
                                <div className="subscribebox">
                                    <p>PREMIUM has all the PRO features including Notes & Notebooks browser extension except.</p>
                                    <ul>
                                        <li>

                                            <p> <i className="fa-sharp fa-solid fa-angles-right"></i><strong>Watchlist</strong> is limited to 500  companies</p>
                                        </li>
                                        <li>

                                            <p> <i className="fa-sharp fa-solid fa-angles-right"></i><strong>Pinboard</strong>has only 10 notebooks with 3 notes each</p>
                                        </li>
                                        <li>

                                            <p> <i className="fa-sharp fa-solid fa-angles-right"></i><strong>PREMIUM</strong>has no dashboard.</p>
                                        </li>
                                    </ul>
                                    <button className="rigisterbtn" data-bs-toggle="modal" data-bs-target="#exampleModal3">Subscribe</button>
                                    <div className="clearfix"></div>
                                </div>
                            </div></div>

                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="exampleModal1"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="subscribesec">
                                <div className="subscribebox">

                                    <ul>
                                        <li>

                                            <p> <i className="fa-sharp fa-solid fa-angles-right"></i><strong>No noise news-</strong>Hida tabs you aren't interested in.</p>
                                        </li>
                                        <li>

                                            <p> <i className="fa-sharp fa-solid fa-angles-right"></i><strong>PRO Dashboard-</strong>Gateway to all your favorite features - you can drag and drop your favorite features on your dashboard,to organize them as you wish</p>
                                        </li>
                                        <li>

                                            <p> <i className="fa-sharp fa-solid fa-angles-right"></i>Bookmark articles to read later</p>
                                        </li>
                                        <li>

                                            <p> <i className="fa-sharp fa-solid fa-angles-right"></i>Share articles, or your notes on social media.</p>
                                        </li>
                                        <li>

                                            <p> <i className="fa-sharp fa-solid fa-angles-right"></i><strong> Daily and Weekly Newsletters</strong> Company news
                                                Economic news</p>
                                        </li>
                                        <li>

                                            <p> <i className="fa-sharp fa-solid fa-angles-right"></i><strong> Daily and Weekly Newsletters</strong> Company news
                                                Economic news</p>
                                        </li>
                                        <li>

                                            <p> <i className="fa-sharp fa-solid fa-angles-right"></i><strong>PRO pinboard</strong> - see it, share it, save it Make a note on any content on the web using Notes and Notebooks browser extension to 1000 notes to 1000
                                                notebooks. Drag & drop your notebooks to organize them as you wish.</p>
                                        </li>
                                        <li>

                                            <p> <i className="fa-sharp fa-solid fa-angles-right"></i> <strong>Total of 1000 companies in Watchlists (Contact Us if you want more)</strong>
                                                With 5 types of alerts available about companies you are watching.</p>
                                        </li>
                                        <li>

                                            <p> <i className="fa-sharp fa-solid fa-angles-right"></i> <strong>Introductory periodoffer</strong></p>
                                        </li>
                                    </ul>


                                    <button className="rigisterbtn" data-bs-toggle="modal" data-bs-target="#exampleModal3">Subscribe</button>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div
                className="modal fade"
                id="exampleModal2"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="subscribesec">
                                <div className="subscribebox">
                                    <p>PRO+ has all the PRO features including Notes & Notebooks browser extension and includes</p>
                                    <ul>
                                        <li>

                                            <p> <i className="fa-sharp fa-solid fa-angles-right"></i>Form based Al interface</p>
                                        </li>
                                        <li>

                                            <p> <i className="fa-sharp fa-solid fa-angles-right"></i>in draft mode, you con ask PRO+ to draft an article, which you can begin to polish a minute later.</p>
                                        </li>
                                    </ul>
                                    <Link href="">Call US</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="exampleModal3"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">

                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="subscribesec">
                                <div className="subscribebox">
                                    <h2>Sign Up</h2>
                                    <form>
                                        <div className="row">
                                            <div className="col-12 col-md-6">

                                                <input type="text" placeholder="First Name" className="form-control" />

                                            </div>
                                            <div className="col-12 col-md-6">

                                                <input type="text" placeholder="Last Name" className='form-control' />

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <input type="email" placeholder="Email Address" className='form-control' />

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <input type="password" placeholder="Password" className='form-control' />

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <label>
                                                    <input type="checkbox" />
                                                    I agree to the terms of use
                                                </label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <p>Click to receive news on any of these topics in a daily newsletter.</p>
                                                <div className="row">
                                                    <div className="col-12 col-md-6">
                                                        <div className="newsletterlist">
                                                            <ul>
                                                                <li>
                                                                <label htmlFor="usInMinutes">
                                                                    <input type="checkbox" id="usInMinutes" />
                                                                    US in Minutes</label>
                                                                </li>
                                                                <li>
                                                                <label htmlFor="business">
                                                                    <input type="checkbox" id="business" />
                                                                   Business</label>
                                                                </li>
                                                                <li>
                                                                <label htmlFor="industry">
                                                                    <input type="checkbox" id="industry" />
                                                                    Industry</label>
                                                                </li>
                                                                <li>
                                                                <label htmlFor="dataDive">
                                                                    <input type="checkbox" id="dataDive" />
                                                                   Data Dive</label>
                                                                </li>
                                                                <li>
                                                                <label htmlFor="climateChange">
                                                                    <input type="checkbox" id="climateChange" />
                                                                    Climate Change</label>
                                                                </li>
                                                                <li>
                                                                <label htmlFor="entertainment">
                                                                    <input type="checkbox" id="entertainment" />
                                                                   Entertainment</label>
                                                                </li>
                                                                <li>
                                                                <label htmlFor="pressRelease">
                                                                    <input type="checkbox" id="pressRelease" />
                                                                   Press Release</label>
                                                                </li>
                                                                {/* Add more checkboxes with labels for other topics */}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        <div className="newsletterlist">
                                                            <ul>
                                                                <li>
                                                                <label htmlFor="investing">
                                                                    <input type="checkbox" id="investing" />
                                                                    Investing</label>
                                                                </li>
                                                                <li>
                                                                <label htmlFor="economy">
                                                                    <input type="checkbox" id="economy" />
                                                                   Economy</label>
                                                                </li>
                                                                <li>
                                                                <label htmlFor="layoffs">
                                                                    <input type="checkbox" id="layoffs" />
                                                                    Layoffs</label>
                                                                </li>
                                                                <li>
                                                                <label htmlFor="technology">
                                                                    <input type="checkbox" id="technology" />
                                                                   Technology</label>
                                                                </li>
                                                                <li>
                                                                <label htmlFor="health">
                                                                    <input type="checkbox" id="health" />
                                                                    Health</label>
                                                                </li>
                                                                <li>
                                                                <label htmlFor="world">
                                                                    <input type="checkbox" id="world" />
                                                                   World</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <button type="submit" className="btnlist signup">Sign Up <i className="fa-sharp fa-solid fa-angles-right"></i></button>
                                                <div className="clearfix"></div>
                                                <p className="loginlist">Already have an account? <Link href="" className="login">Login</Link></p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Place your modal code here */}

        </>
    )
}


export default BreakingNews;

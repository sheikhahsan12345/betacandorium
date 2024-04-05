import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import Link from "next/link";
import GoogleAds from "./GoogleAds";
const Appnavbar = () => {
const [isScrolled , setIsScrolled] = useState(false);
const [tabs, setTabs] = useState([]);
useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    // Check if the user has scrolled past a certain threshold
    if (scrollTop > 100) { // Adjust the threshold as needed
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
 
  fetch('https://beta.candorium.com/api/v2/static/tabs')
  .then(response => response.json())
  .then(data => {
    // Set the fetched data to the state
    setTabs(data.message);
  })
  .catch(error => console.error('Error fetching data:', error));
window.addEventListener('scroll', handleScroll);

// Detach the scroll event listener when component unmounts
return () => {
  window.removeEventListener('scroll', handleScroll);
};
}, []);
  return (
    <>
    <div className="topnavbar" style={{ backgroundColor: '#1c404e' }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="logoimg">
            <Link href={'/'} >
              <Image src={'/Logo.png'} width={220} height={50} alt="" style={{ margin: '0 auto', display: 'table', objectFit: 'contain' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <GoogleAds/>
    <div className={isScrolled ? 'header fixed' : 'header'} >
    <header>
   
  <nav className="navbar navbar-expand-lg navbar-light desired tag">
    <div className="container">
      <div className="navbar-brand">
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >
          <i className="fa-solid fa-bars" />
          </button>
          <ul className="dropdown-menu">
            <li>
            <Link href={'/'}  className="dropdown-item">
            About Us
            </Link>
             
            </li>
            <li>
            <Link href={'/'}  className="dropdown-item">
           Contact Us
            </Link>
             
            </li>
            <li>
            <Link href={'/'} className="dropdown-item">
           Privacy Policy
            </Link>
             
            </li>
            <li>
            <Link href={'/'} className="dropdown-item">
             Subscription
            </Link>
             
            </li>
          </ul>
        </div>
        <div className="vn-red" style={{ textAlign: "center" }}>
        <div className='dropdown'>
        <Link href={'/'} className='dropdown-toggle' role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
          <div className="d_icon">
            <img src={'/download_icon.png'} alt="" />
          </div>
          <span>Download App</span>
          </Link>
          <div className="dropdown-menu orcodemenu">
              <div className='orcodelist'>
               <div className='orcodebox'>
               <i className="fa-brands fa-apple"></i>
                <h4>OR Code</h4>
               </div>
               <i className="fa-solid fa-qrcode"></i>
               <div className='orcodebox'>
               <i className="fa-brands fa-android"></i>
                <h4>OR Code</h4>
               </div>
               <i className="fa-solid fa-qrcode"></i>
              </div>
            </div>
          </div>
      </div>
    </div>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      >
    <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
        <Link href={'/'} className="nav-link"  to='/'>
          Home
          </Link>
        </li>
        <li className="nav-item">
        <Link href={'/'} className="nav-link">
          
          Videos
          </Link>
        </li>
        <li className="nav-item">
        <Link href={'/'} className="nav-link"  >
              PinBoard
            </Link>
          
        </li>
        <li className="nav-item">
        <Link href={'/'} className="nav-link" to='/CategoryListing'>
              Watchlist
            </Link>
          
         
        </li>
        <li className="nav-item">
        <Link href={'/'} className="nav-link"  >
             Companies
            </Link>
          
        </li>
        <li className="nav-item">
        <Link href={'/'} className="nav-link"  >
             <span>PRO</span>Dashboard
            </Link>
         
        </li>
        <li className="nav-item">
        <Link href={'/'} className="nav-link"  >
             <span>PRO</span>+
            </Link>
          
        </li>
      </ul>
      <div className="nav-btns">
        <li className="nav-item spe">
          <div className="search-box">
            <button className="btn-search">
            <i className="fas fa-search" />
            </button>
            <input
              type="text"
              className="input-search"
              placeholder="Type to Search..."
              />
          </div>
        </li>
        <li className="nav-item spe">
        <Link href={'/'} className="nav-link"> <img src={'/user.png'} alt="" /></Link>
        </li>
        <li className="nav-item spe orcode">
          <button className="nav-link btn_theme nav-link" >
          Join for FREE
          </button>
        
        </li>
      </div>
    </div>
    </div>
  </nav>
</header>

<div className='header-2'>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        {tabs.map((item, index) => (
          <li className="nav-item dropdown" key={index}> 
          <Link href={'/'} className="nav-link dropdown-toggle" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              {/* USInMinutes */}
              {item.cat_name}
                <i className="fa-regular fa-angle-down"></i>
            </Link>
            <ul className="dropdown-menu">
            {item.subcats.map((subItem, subIndex) => (
              <li key={subIndex}>
              <Link  href={'/'} className="dropdown-item" > {subItem.sub_cat_name}</Link>
              
              </li>
              ))}
              {/* <li>
              <Link href={'/'}  className="dropdown-item" > Earning News</Link>
               
              </li>

              <li>
              <Link href={'/'}  className="dropdown-item" >  OwnerShip News</Link>
              
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" > Quarterly Reports</Link>
              
              </li> */}
            </ul>
          </li>
          ))}
          {/* <li className="nav-item dropdown">
          <Link  href={'/'} className="nav-link dropdown-toggle" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Investing
             <i className="fa-regular fa-angle-down"></i>
            </Link>
            <ul className="dropdown-menu">
              <li>
              <Link href={'/'}  className="dropdown-item" > Commodies</Link>
              
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" > Currencies</Link>
               
              </li>

              <li>
              <Link  href={'/'} className="dropdown-item" >  Earnings</Link>
              
              </li>
              <li>
              <Link href={'/'} className="dropdown-item" >Economy</Link>
              
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" >Finance</Link>
              
              </li>
              <li>
              <Link href={'/'}  className="dropdown-item" >IPO</Link>
              
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" >Market Analysis</Link>
              
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
          <Link href={'/'}   className="nav-link dropdown-toggle" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
               Buisness
              <i className="fa-regular fa-angle-down"></i>
            </Link>
            <ul className="dropdown-menu">
              <li>
              <Link href={'/'} className="dropdown-item" >Commerce</Link>
              
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" >  Company News</Link>
               
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" >  Energy</Link>
               
              </li>
             
              <li>
              <Link href={'/'}  className="dropdown-item" > Recession</Link>
              
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
          <Link href={'/'}  className="nav-link dropdown-toggle" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
               Economy
              <i className="fa-regular fa-angle-down"></i>
            </Link>
            <ul className="dropdown-menu">
              <li>
              <Link  href={'/'} className="dropdown-item" > Global Economy</Link>
              
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" > Inflation</Link>
               
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" > UnEmployment</Link>
               
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" >U.S Fed Reserve</Link>
              
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
          <Link href={'/'}  className="nav-link dropdown-toggle" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
               Industy
              <i className="fa-regular fa-angle-down"></i> 
            </Link>
            <ul className="dropdown-menu">
              <li>
              <Link href={'/'}  className="dropdown-item" >Finance Insuarance & Real Estate</Link>
              
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" > Healthcare</Link>
               
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" >Manufacturing</Link>
               
              </li>
              <li>
              <Link href={'/'}  className="dropdown-item" > Mining & Minerals</Link>
              
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" > Oil & Gas</Link>
              
              </li>
              <li>
              <Link href={'/'}  className="dropdown-item" > Retail</Link>
              
              </li>
              <li>
              <Link href={'/'}  className="dropdown-item" >Technology</Link>
              
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
          <Link href={'/'}  className="nav-link dropdown-toggle" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Layoffs
             <i className="fa-regular fa-angle-down"></i> 
            </Link>
            <ul className="dropdown-menu">
              <li>
              <Link  href={'/'} className="dropdown-item" >Automative Sector</Link>
              
              </li>
              <li>
              <Link href={'/'}  className="dropdown-item" >Financial Services</Link>
               
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" >Retail</Link>
               
              </li>
              <li>
              <Link href={'/'}  className="dropdown-item" > Tech</Link>
              
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
          <Link href={'/'}  className="nav-link dropdown-toggle" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
               Data Dive
              <i className="fa-regular fa-angle-down"></i> 
            </Link>
            <ul className="dropdown-menu">
              <li>
              <Link  href={'/'} className="dropdown-item" >Finance insurance & Real Estate</Link>
              
              </li>
              <li>
              <Link href={'/'}  className="dropdown-item" >   Healthcare</Link>
               
              </li>
             
              <li>
              <Link href={'/'}  className="dropdown-item" > Technology</Link>
              
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
          <Link href={'/'}  className="nav-link dropdown-toggle" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
                Technology
               <i className="fa-regular fa-angle-down"></i> 
            </Link>
            <ul className="dropdown-menu">
              <li>
              <Link href={'/'}  className="dropdown-item" > Artifical Intelligence</Link>
              
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" > Cryptocurrencies</Link>
               
              </li>
              
              <li>
              <Link href={'/'}  className="dropdown-item" > Cybersecurity</Link>
              
              </li>
              <li>
              <Link href={'/'}  className="dropdown-item" >EV</Link>
              
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" >Information Technology</Link>
              
              </li>
              <li>
              <Link href={'/'}  className="dropdown-item" >Robotics</Link>
              
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" >Science</Link>
              
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" >Smart Phone</Link>
              
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" >Socail Media</Link>
              
              </li>
              <li>
              <Link href={'/'}  className="dropdown-item" >Space</Link>
              
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
          <Link href={'/'}  className="nav-link dropdown-toggle" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
               Climate Change
              <i className="fa-regular fa-angle-down"></i>  
            </Link>
            <ul className="dropdown-menu">
              <li>
              <Link href={'/'}  className="dropdown-item" > Environment</Link>
              
              </li>
              <li>
              <Link href={'/'}  className="dropdown-item" > Responsible Consumption</Link>
               
              </li>
              
            </ul>
          </li>
          <li className="nav-item dropdown">
          <Link href={'/'}  className="nav-link dropdown-toggle" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Health
             <i className="fa-regular fa-angle-down"></i>
            </Link>
            <ul className="dropdown-menu">
              <li>
              <Link  href={'/'} className="dropdown-item" >COVID 19</Link>
              
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" > Public Health</Link>
               
              </li>
              
            </ul>
          </li>
          <li className="nav-item dropdown">
          <Link  href={'/'} className="nav-link dropdown-toggle" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
             Entertainment
            <i className="fa-regular fa-angle-down"></i>
            </Link>
            <ul className="dropdown-menu">
              <li>
              <Link href={'/'}  className="dropdown-item" >Content Streaming</Link>
              
              </li>
              <li>
              <Link href={'/'}  className="dropdown-item" >   Gaming</Link>
               
              </li>
              
              <li>
              <Link href={'/'}  className="dropdown-item" > Life style</Link>
              
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" > Media News</Link>
              
              </li>
              <li>
              <Link href={'/'}  className="dropdown-item" > Movies</Link>
              
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" >ShowBiz</Link>
              
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" >Sports</Link>
              
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
          <Link href={'/'}  className="nav-link dropdown-toggle" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
               Wars & Conflicts
              <i className="fa-regular fa-angle-down"></i> 
            </Link>
            <ul className="dropdown-menu">
              <li>
              <Link href={'/'}  className="dropdown-item" > Link 1</Link>
              
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" > Link 2</Link>
              
              </li>
              <li>
              <Link href={'/'}  className="dropdown-item" > Link 3</Link>
              
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
          <Link href={'/'}  className="nav-link dropdown-toggle" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
               World
              <i className="fa-regular fa-angle-down"></i> 
            </Link>
            <ul className="dropdown-menu">
              <li>
              <Link  href={'/'} className="dropdown-item" >Asia</Link>
              
              </li>
              <li>
              <Link href={'/'}  className="dropdown-item" >China</Link>
               
              </li>
              
              <li>
              <Link href={'/'}  className="dropdown-item" >Europe</Link>
              
              </li>
              <li>
              <Link href={'/'} className="dropdown-item" >India</Link>
              
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" >Iran Tension</Link>
              
              </li>
              <li>
              <Link href={'/'}  className="dropdown-item" >Middle East Africa</Link>
              
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" >Oceania</Link>
              
              </li>
              <li>
              <Link href={'/'}  className="dropdown-item" >Pacific Rim</Link>
              
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" >Russia</Link>
              
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" >Ukrane</Link>
              
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" >United Kingdom</Link>
              
              </li>
              <li>
              <Link href={'/'}  className="dropdown-item" >USA</Link>
              
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
          <Link href={'/'}  className="nav-link dropdown-toggle" role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              Press Release
             <i className="fa-regular fa-angle-down"></i> 
            </Link>
            <ul className="dropdown-menu">
              <li>
              <Link  href={'/'} className="dropdown-item" >Finance Insuarance &</Link>
              
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" >Healthcare</Link>
               
              </li>
             
              <li>
              <Link  href={'/'} className="dropdown-item" >Manufacturing</Link>
              
              </li>
              <li>
              <Link href={'/'}  className="dropdown-item" >Mining & Minerals</Link>
              
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" >Oil & Gas</Link>
              
              </li>
              <li>
              <Link  href={'/'} className="dropdown-item" >Retail</Link>
              
              </li>
              <li>
              <Link href={'/'} className="dropdown-item" >Technology</Link>
              
              </li>
              <li>
              <Link href={'/'} className="dropdown-item" >Tranportation</Link>
              
              </li>
            </ul>
          </li> */}
        </ul>
      </div>
    </div>
  </nav>
</div>
</div>
</>
  );
}

export default Appnavbar;

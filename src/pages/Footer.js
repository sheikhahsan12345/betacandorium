import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../public/logo.png";
import Link from 'next/link';
import Image from 'next/image';

const Footer =()=>{
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.min.js')
            .then(() => {
                // Bootstrap JS has been loaded successfully
            })
            .catch((error) => {
                console.error('Error loading Bootstrap JS:', error);
            });
    }, []);
    return(
        
<>
 <section className="footer-sec">
  <div className="container">
    <div className="row">
      <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <div className="foot-inner ft">
          <div className="logo-foot">
            <Image className="img-fluid" src={Logo} alt="" />
          </div>
          <h5>Our Contact</h5>
          <ul>
            <li>
            <Link href='tel:+4256144636'>
            <span>
                  <i className="fa-solid fa-phone" />
                </span>
                (425) 614-4636
            </Link> 
            </li>
            <li>
            <Link href="mailto:support@candorium.com">
                <span>
                  <i className="fa-solid fa-envelope" />
                </span>
                support@candorium.com
                </Link> 
            </li>
          </ul>
          <ul className="socaillist">
       <li>
       <Link href=""><i className="fa-brands fa-facebook-f"></i></Link>
       </li>
       <li>
       <Link href=""><i className="fa-brands fa-twitter"></i></Link>
       </li>
       <li>
       <Link href=""><i className="fa-brands fa-instagram"></i></Link>
       </li>
       </ul>
        </div>
       
      </div>
      <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <div className="foot-inner">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <h5>Quick Links</h5>
              <ul>
                <li>
                 <Link href="">About Us</Link>
                
                </li>
                <li>
                <Link href=""> Contact</Link>
                
                </li>
                <li>
                <Link href="">Privacy policy</Link>
                 
                </li>
                <li>
                <Link href="">Subcription</Link>
              
                </li>
                <li>
                <Link href="">Careers</Link>
              
                </li>
                <li>
                <Link href="">Products</Link>
              
                </li>
                <li>
                <Link href="">Watchlist</Link>
              
                </li>
                <li>
                <Link href="">Sitemap</Link>
              
                </li>
              </ul>
            </div>
           
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="foot-inner ft">
              <h5>Categories</h5>
              <ul>
                <li>
                <Link href="">USinMinutes</Link>
                
                </li>
                <li>
                <Link href=""> Bussiness</Link>
                
                </li>
                <li>
                <Link href=""> Economy</Link>
                
                </li>
                <li>
                <Link href=""> Industry</Link>
                 
                </li>
                <li>
                <Link href=""> Politics</Link>
                  
                </li>
                <li>
                <Link href=""> Trending</Link>
                
                </li>
                <li>
                <Link href=""> Term Of Use</Link>
                
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <div className="foot-inner ft">
          <h5>Our Offices</h5>
          <ul>
            
            <li className="ft_last_" href="">
             13555 SE 36th St, Suite 280 
              <br />
              Bellevue,WA 98006
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}



export default Footer;
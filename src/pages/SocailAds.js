import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import AddImg from "../../public/ads_s1.png";


const SocailAds =()=>{
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
  <section className="ads_slides_section">
  <div className="container">
    <div className="row">
      <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <div className="as_item">
          <div>
            <Image className="img-fluid" src={AddImg} alt="" />
          </div>
          <div>
            <h6>Advertisement goes here... Ads goes here...</h6>
            <div className="lns_specs">
              <p>USinMinutes</p>
              <p className="dots">•</p>
              <p className="light_grey">12 June 0000, 12.15 WIB</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <div className="as_item">
          <div>
          <Image className="img-fluid" src={AddImg} alt="" />
          </div>
          <div>
            <h6>Advertisement goes here... Ads goes here...</h6>
            <div className="lns_specs">
              <p>USinMinutes</p>
              <p className="dots">•</p>
              <p className="light_grey">12 June 0000, 12.15 WIB</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <div className="as_item">
          <div>
          <Image className="img-fluid" src={AddImg} alt="" />
          </div>
          <div>
            <h6>Advertisement goes here... Ads goes here...</h6>
            <div className="lns_specs">
              <p>USinMinutes</p>
              <p className="dots">•</p>
              <p className="light_grey">12 June 0000, 12.15 WIB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}



export default SocailAds;
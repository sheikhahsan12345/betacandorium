import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import EnirmentalImg from "../../public/envirn_img1.png";
import HighLights from "../../public/env_high1.png";
import HighLights1 from "../../public/env_high2.png";


const EnvironmentalProtectionRevolution =()=>{
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
 <section className="environmental_section">
  <div className="container">
    <div className="row">
      <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
        <div>
          <Image className="img-fluid" src={EnirmentalImg} alt="" />
        </div>
      </div>
      <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
        <div className="env_right">
          <div>
          <h1>Environmental Protection Revolution</h1>
            <p>
              A leading technology company has announced its latest innovation
              in waste management systems that reduces the amount of waste
              entering landfills by as much as 50%. This new system uses
              advanced processing technology to recycle various types of waste
              that were previously difficult to recycle.
            </p>
            <p>
              According to a statement from the company's CEO, this technology
              is a historical milestone in environmental protection efforts. By
              utilizing more efficient recycling processes.
            </p>
          </div>
          <div>
            <p className="er_p">Sumber: Media.com , September, 05 2023</p>
          </div>
        </div>
        
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-11">
        <div className="env_highlights">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="env_h_item border1">
                <div>
                  <Image
                    className="img-fluid"
                    src={HighLights}
                    alt=""
                  />
                </div>
                <div>
                  <h3>British Government Agrees Final Trade Deal</h3>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="env_h_item">
                <div>
                  <Image
                    className="img-fluid"
                    src={HighLights1}
                    alt=""
                  />
                </div>
                <div>
                  <h3>Leading Women Podcast Highlights Women's</h3>
                </div>
              </div>
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




export default EnvironmentalProtectionRevolution;
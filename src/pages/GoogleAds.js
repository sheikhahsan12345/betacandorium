import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";

const GoogleAds =()=>{
    return(
        <>
               <div className="googeladssec" >
                 <div className="container">
                    <div className="google_ads_inner">
                        <div className="g_ads">
                            <Image src={'/Google_ads.png'} width={400} height={150} alt="ads" />
                        </div>
                        <div className="g_ads">
                            <h2>Banner here...</h2>
                        </div>
                    </div>
                    </div>
              
            </div>
        </>
    )
}



export default GoogleAds;
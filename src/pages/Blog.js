import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Image from 'next/image';
import GoogleAds from '../pages/GoogleAds'
import Img1 from "../../public/img_pns1.png";
import Img2 from "../../public/img_pns2.png";
import Img3 from "../../public/pns_img1.png";
import Img4 from "../../public/pns_img2.png";
import Img5 from "../../public/pns_img3.png";
import Img6 from "../../public/img_pns25.png"; 
import Img7 from "../../public/img_pns3.png";
import Img8 from "../../public/pns_img4.png";
import Img9 from "../../public/pns_img5.png";
import Img10 from "../../public/pns_img6.png";
import Img11 from "../../public/img_pns4.png";
import Img12 from "../../public/img_pns5.png";
import Img13 from "../../public/img_pns6.png";
import Img14 from "../../public/pns_img7.png";
import Img15 from "../../public/pns_img8.png";
import Img16 from "../../public/img_pns7.png";
import Img17 from "../../public/pns_img10.png";
import Img18 from "../../public/pns_img11.png";
import Img19 from "../../public/pns_img12.png";
import Img20 from "../../public/img_pns8.png";
import Img21 from "../../public/img_pns9.png";
import Img22 from "../../public/pns_img13.png";
import Img23 from "../../public/pns_img14.png";
import Img24 from "../../public/pns_img15.png";
import Img25 from "../../public/img_pns10.png";
import Img26 from "../../public/img_pns11.png";
import Img27 from "../../public/pns_img16.png";
import Img28 from "../../public/pns_img17.png";
import Img29 from "../../public/pns_img18.png";
import Img30 from "../../public/img_pns12.png";
import Img31 from "../../public/img_pns13.png";
import Img32 from "../../public/pns_img19.png";
import Img33 from "../../public/pns_img20.png";
import Img34 from "../../public/pns_img21.png";
import Img35 from "../../public/img_pns14.png";
import Img36 from "../../public/img_pns15.png";
import Img37 from "../../public/pns_img22.png";
import Img38 from "../../public/pns_img23.png";
import Img39 from "../../public/pns_img24.png";
import Img40 from "../../public/img_pns16.png";
import Img41 from "../../public/img_pns17.png";
import Img42 from "../../public/pns_img25.png";
import Img43 from "../../public/pns_img26.png";
import Img44 from "../../public/pns_img27.png";
import Img45 from "../../public/img_pns18.png";
import Img46 from "../../public/img_pns19.png";
import Img47 from "../../public/pns_img28.png";
import Img48 from "../../public/pns_img29.png";
import Img49 from "../../public/pns_img30.png";
import Img50 from "../../public/img_pns20.png";
import Img51 from "../../public/img_pns21.png";
import Img52 from "../../public/img_pns22.png";
import Img53 from "../../public/img_pns23.png";



const Blog= () => {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.min.js')
            .then(() => {
                // Bootstrap JS has been loaded successfully
            })
            .catch((error) => {
                console.error('Error loading Bootstrap JS:', error);
            });
    }, []);

    const BlogListing = [
        {
            title: 'USinMinutes',
            NewImg: [Img1, Img2],
            sideImg: [Img3, Img4,Img5]
        },
        {
            title: 'Investing',
            NewImg: [Img6, Img7],
            sideImg: [Img8,Img9,Img10],
        },
        {
            title: 'Bussiness',
            NewImg: [Img11, Img12],
            sideImg: [Img13,Img14,Img15],
        },

        {
            title: 'Economy',
            NewImg: [Img13, Img16],
            sideImg: [Img17,Img18,Img19],
        },
        // Google Ads component after the fourth item
       
        {
            title: 'Industy',
            NewImg: [Img20, Img21],
            sideImg: [Img22,Img23,Img24],
        },
        {
            title: 'Layoffs',
            NewImg: [Img25, Img26],
            sideImg: [Img27,Img28,Img29],
        },
        {
            title: 'Data Dive',
            NewImg: [Img30, Img31],
            sideImg: [Img32,Img33,Img34],
        },
        {
            title: 'Technology',
            NewImg: [Img35, Img36],
            sideImg: [Img37,Img38,Img39],
        },
        
        {
            title: 'Climate Change',
            NewImg: [Img40, Img41],
            sideImg: [Img42,Img43,Img44],
        },
        {
            title: 'Health',
            NewImg: [Img45, Img46],
            sideImg: [Img47,Img48,Img49],
        },
        {
            title: 'Entertainment',
            NewImg: [Img50, Img51],
            sideImg: [Img47,Img48,Img49],
        },
        {
            title: 'World',
            NewImg: [Img52, Img53],
            sideImg: [Img47,Img48,Img49],
        },
        
    ];
   

    return (
        <>
            {BlogListing.map((value, index) => {
                const shouldRenderAds = (index + 1) % 4 === 0 && index !== 0 && index !== BlogListing.length - 1;
                return (
                    <section className="politic_news_sec" key={index}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-lg-7 col-xl-8">
                                    <div className="head_pns">
                                        <div className="heading_pns">
                                            <h1>{value.title}</h1>
                                        </div>
                                        <div className="search_pns">
                                            <input type="search" placeholder="Search news" />
                                            <i className="fa-solid fa-magnifying-glass" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        {value.NewImg.map((img, imgIndex) => (
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6" key={imgIndex}>
                                                <div className="headline_pns">
                                                    <Image className="img-fluid" src={img} alt="" />
                                                    <div className="h_pns">
                                                        <h5>September 23th, 2023</h5>
                                                        <h3>
                                                            The Headline goes here... <br />
                                                            Headline goes here...
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-12 col-md-8 col-lg-5 col-xl-4">
                                    <div className="latest-news-siderbar">
                                        <div className="lns-head">
                                            <h3>Latest News</h3>
                                            <h6>
                                               <Link href='sakjcb'>   Show more <i className="fa-solid fa-arrow-right-long" /></Link>
                                                  
                                            </h6>
                                        </div>
                                        <div className="lns-body">
                                            {value.sideImg.map((img, imgIndex) => (
                                                <div className="lns-item" key={imgIndex}>
                                                    <div>
                                                        <Image src={img} alt="img" />
                                                    </div>
                                                    <div className="lns-item-right">
                                                        <h4>Impact of New COVID-19 Variants News</h4>
                                                        <div className="lns_specs">
                                                            <p>World news</p>
                                                            <p className="dots">•</p>
                                                            <p className="light_grey">12 December 2023</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {shouldRenderAds && <GoogleAds />}
                    </section>
                );
            })}
        </>
    );
}

export default Blog;

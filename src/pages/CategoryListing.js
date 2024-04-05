import React, { useEffect } from 'react';
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import Appnavbar from './Appnavbar';
import Footer from './Footer';
import Image from 'next/image';
import EnvironmentalProtectionRevolution from "./EnvironmentalProtectionRevolution";
import SocailAds from "./SocailAds";
import Img1 from '../../public/img_pns7.png';
import Img2 from '../../public/news_1.png';
import Img3 from '../../public/img_pns14.png';
import Img4 from '../../public/news_2.PNG';
import Img5 from '../../public/news_3.png';
import Img6 from '../../public/news_4.png';
import Img7 from '../../public/news_5.png';
import Img8 from '../../public/news_6.png';
import Latest1 from '../../public/latest_1.png';
import Latest2 from '../../public/latest_2.png';
import Latest3 from '../../public/latest_3.png';
import Latest4 from '../../public/latest_4.png';
import Latest5 from '../../public/latest_6.png';
import latest7 from '../../public/latest_7.PNG';
import latest8 from '../../public/latest_8.png';



const CategoryListing = () => {
   

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.min.js')
            .then(() => {
                // Bootstrap JS has been loaded successfully
            })
            .catch((error) => {
                console.error('Error loading Bootstrap JS:', error);
            });
    }, []);

    const breakingnews = [
        {
            TopHeading: 'Breaking News',
            smallHeading: 'Headline goes here...',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
            img: Img1
        },
        {
            TopHeading: 'Breaking News',
            smallHeading: 'Headline goes here...',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
            img: Img2
        },
        {
            TopHeading: 'Breaking News',
            smallHeading: 'Headline goes here...',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
            img: Img3
        },
        {
            TopHeading: 'Breaking News',
            smallHeading: 'Headline goes here...',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
            img: Img4
        },
        {
            TopHeading: 'Breaking News',
            smallHeading: 'Headline goes here...',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
            img: Img5
        },
        {
            TopHeading: 'Breaking News',
            smallHeading: 'Headline goes here...',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
            img: Img6
        },
        {
            TopHeading: 'Breaking News',
            smallHeading: 'Headline goes here...',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
            img: Img7
        },
        {
            TopHeading: 'Breaking News',
            smallHeading: 'Headline goes here...',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
            img: Img8
        },

    ]

    const Latest = [

        {
            latestheading: "Impact of New COVID-19 Variants News",
            latestleftheading: 'renatta Christie',
            latestdate: 'sep 17th 2023',
            latestimg1: Latest1,
        },
        {
            latestheading: "Impact on the Growth of the local Buisness Sector",
            latestleftheading: 'renatta Christie',
            latestdate: 'sep 17th 2023',
            latestimg1: Latest2,
        },
        {
            latestheading: "Impact on the Growth of the local Buisness Sector",
            latestleftheading: 'renatta Christie',
            latestdate: 'sep 17th 2023',
            latestimg1: Latest3,
        },
        {
            latestheading: "Impact of New COVID-19 Variants News",
            latestleftheading: 'renatta Christie',
            latestdate: 'sep 17th 2023',
            latestimg1: Latest4,
        },
        {
            latestheading: "Impact on the Growth of the local Buisness Sector",
            latestleftheading: 'renatta Christie',
            latestdate: 'sep 17th 2023',
            latestimg1: Latest5,
        },
        {
            latestheading: "Impact on the Growth of the local Buisness Sector",
            latestleftheading: 'renatta Christie',
            latestdate: 'sep 17th 2023',
            latestimg1: latest7,
        },
        {
            latestheading: "Impact of New COVID-19 Variants News",
            latestleftheading: 'renatta Christie',
            latestdate: 'sep 17th 2023',
            latestimg1: latest8,
        },
        {
            latestheading: "Impact on the Growth of the local Buisness Sector",
            latestleftheading: 'renatta Christie',
            latestdate: 'sep 17th 2023',
            latestimg1: Latest2,
        },
        {
            latestheading: "Impact on the Growth of the local Buisness Sector",
            latestleftheading: 'renatta Christie',
            latestdate: 'sep 17th 2023',
            latestimg1: Latest3,
        },
        {
            latestheading: "Impact of New COVID-19 Variants News",
            latestleftheading: 'renatta Christie',
            latestdate: 'sep 17th 2023',
            latestimg1: Latest4,
        },
        {
            latestheading: "Impact on the Growth of the local Buisness Sector",
            latestleftheading: 'renatta Christie',
            latestdate: 'sep 17th 2023',
            latestimg1: Latest5,
        },
        {
            latestheading: "Impact on the Growth of the local Buisness Sector",
            latestleftheading: 'renatta Christie',
            latestdate: 'sep 17th 2023',
            latestimg1: latest7,
        },
        {
            latestheading: "Impact of New COVID-19 Variants News",
            latestleftheading: 'renatta Christie',
            latestdate: 'sep 17th 2023',
            latestimg1: latest8,
        },
        {
            latestheading: "Impact on the Growth of the local Buisness Sector",
            latestleftheading: 'renatta Christie',
            latestdate: 'sep 17th 2023',
            latestimg1: Latest2,
        },
        {
            latestheading: "Impact on the Growth of the local Buisness Sector",
            latestleftheading: 'renatta Christie',
            latestdate: 'sep 17th 2023',
            latestimg1: Latest3,
        },
        {
            latestheading: "Impact of New COVID-19 Variants News",
            latestleftheading: 'renatta Christie',
            latestdate: 'sep 17th 2023',
            latestimg1: Latest4,
        },
        {
            latestheading: "Impact on the Growth of the local Buisness Sector",
            latestleftheading: 'renatta Christie',
            latestdate: 'sep 17th 2023',
            latestimg1: Latest5,
        },
        {
            latestheading: "Impact on the Growth of the local Buisness Sector",
            latestleftheading: 'renatta Christie',
            latestdate: 'sep 17th 2023',
            latestimg1: latest7,
        },
        {
            latestheading: "Impact of New COVID-19 Variants News",
            latestleftheading: 'renatta Christie',
            latestdate: 'sep 17th 2023',
            latestimg1: latest8,
        },
        {
            latestheading: "Impact of New COVID-19 Variants News",
            latestleftheading: 'renatta Christie',
            latestdate: 'sep 17th 2023',
            latestimg1: Latest1,
        },
        {
            latestheading: "Impact on the Growth of the local Buisness Sector",
            latestleftheading: 'renatta Christie',
            latestdate: 'sep 17th 2023',
            latestimg1: Latest2,
        },

    ]

    return (
        <>
        <Head>
        <title>Candorium</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://site-assets.fontawesome.com/releases/v6.0.0/css/all.css" rel="stylesheet" />
      </Head>
            <Appnavbar />
            <div className="newssec">
                <div className="container">


                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                            {
                                breakingnews.map((value, index) => {
                                    return (
                                        <>
                                            <div className="row pt-5 align-items-center categorybox" key={index}>
                                                <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                                    <div className="categaoryheading">
                                                        <h2>{value.TopHeading} <span>{value.smallHeading}</span></h2>
                                                        <p>{value.para}</p>

                                                    </div>
                                                    <div className="breaking_specs"><p>World news</p><p className="dots">•</p><p>12 December 2023</p></div>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5">
                                                    <div className="breakingnewsimg">
                                                        <Image src={value.img} className="img-fluid" alt="img" />
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )



                                })
                            }
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                            <div className="latest-news-siderbar newslist" >
                                <div className="lns-head">
                                    <h3>Latest</h3>

                                </div>
                                <div className="lns-body">
                                    {
                                        Latest.map((value, index) => {

                                            return (
                                                <>
                                                    <div className="lns-item" key={index}>
                                                        <div>
                                                            <Image src={value.latestimg1} alt="img" />
                                                        </div>
                                                        <div className="lns-item-right">
                                                            <h4>{value.latestheading}</h4>
                                                            <div className="lns_specs">
                                                                <p>{value.latestleftheading}</p>
                                                                <p className="dots">•</p>
                                                                <p className="light_grey">{value.latestdate}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )

                                        })
                                    }
                                </div>
                            </div>


                        </div>
                    </div>



                </div>
            </div>
            <EnvironmentalProtectionRevolution />
            <SocailAds />
            <Footer />
        </>
    )


}


export default CategoryListing;
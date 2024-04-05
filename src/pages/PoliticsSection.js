import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const PoliticsSection = () => {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.min.js')
            .then(() => {
                // Bootstrap JS has been loaded successfully
            })
            .catch((error) => {
                console.error('Error loading Bootstrap JS:', error);
            });
    }, []);
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <section className="politics_section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10">
                            <div className="new_Slider">
                                <Carousel infinite={true} autoPlay={true} arrows={false} autoPlaySpeed={2000} responsive={responsive}>
                                    <div>
                                        <div className="politics-slider">
                                            
                                            <div
                                                className="politics_body"
                                                style={{ width: "100%", display: "inline-block" }}
                                            >
                                                <div className="pb_content">
                                                    <div className="pb_label">
                                                        <h2>Politics</h2>
                                                    </div>
                                                    <div className="pb-shadow pb-none">
                                                        <h3>
                                                            News title goes here... News title goes here... News title goes here...{" "}
                                                        </h3>
                                                    </div>
                                                    <p className="pb-date">
                                                        <i>September 23th, 2023</i>
                                                    </p>
                                                </div>
                                                <div className="pb_content pb_c_hover">
                                                    <div className="pb_label">
                                                        <h2>Politics</h2>
                                                    </div>
                                                    <div className="pb-shadow">
                                                        <h3>
                                                            News title goes here... News title goes here... News title goes here...{" "}
                                                        </h3>
                                                        <p className="pb_cp">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.{" "}
                                                        </p>
                                                    </div>
                                                    <p className="pb-date">
                                                        <i>September 23th, 2023</i>
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



export default PoliticsSection;
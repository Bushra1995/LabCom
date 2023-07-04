import React from "react";
import '../../assets/Styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import svg3 from '../../assets/Images/shape.svg';
import megaLab from '../../assets/Images/megaLab.png';
import bioLab from '../../assets/Images/biolab.png';
import Hero from '../UI/Hero'
// import NoTransitionExample from "../components/ControlledCarousel";

const Laboratories = () => {

    return (
        <>
        <Hero />
        {/* <NoTransitionExample /> */}
            {/* ========================= Laboratory-section start ========================= */}
            <section id="services" className="service-section pt-80 mb-5">
                <div className=" shape-3">
                    <img src={svg3} alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 mx-auto">
                            <div className="section-title text-center mb-55">
                                {/* <span class="wow fadeInDown" data-wow-delay=".2s">Services</span> */}
                                <h2 className="mb-15 wow fadeInUp" data-wow-delay=".4s">
                                    Our Laboratories
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">
                                    A group of the most modern laboratories that provide
                                    <br className="d-none d-lg-block" /> all the tests you need with
                                    the latest technologies.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item mb-30">
                                <div className="service-icon mb-25">
                                    {" "}
                                    <img className="labimg" src={megaLab} alt="" />
                                </div>
                                <div className="service-content">
                                    <h4>Mega Lab</h4>
                                    <p>
                                        We operate diagnostic medical laboratories in 22 different
                                        location branches throughout the country.
                                    </p>
                                    <a href="https://megalabs.org/mega/" className="read-more">
                                        Go to the Lab <i className="lni lni-arrow-right" />
                                    </a>
                                </div>
                                <div className="service-overlay img-bg" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item mb-30">
                                <div className="service-icon mb-25">
                                    {" "}
                                    <img
                                        className="labimg"
                                        src={bioLab}
                                        alt=""
                                    />
                                </div>
                                <div className="service-content">
                                    <h4>Biolab</h4>
                                    <p>
                                        Biolab’s mandate is to provide high-quality, cost-effective
                                        laboratory operation through a consolidated service delivery
                                        model.
                                    </p>
                                    <a href="https://biolab.jo/" className="read-more">
                                        Go to the Lab <i className="lni lni-arrow-right" />
                                    </a>
                                </div>
                                <div className="service-overlay img-bg" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item mb-30">
                                <div className="service-icon mb-25">
                                    {" "}
                                    <img className="labimg" src={megaLab} alt="" />
                                </div>
                                <div className="service-content">
                                    <h4>Mega Lab</h4>
                                    <p>
                                        We operate diagnostic medical laboratories in 22 different
                                        location branches throughout the country.
                                    </p>
                                    <a href="https://megalabs.org/mega/" className="read-more">
                                        Go to the Lab <i className="lni lni-arrow-right" />
                                    </a>
                                </div>
                                <div className="service-overlay img-bg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========================= Laboratory-section end ========================= */}
        </>
    )
}

export default Laboratories;
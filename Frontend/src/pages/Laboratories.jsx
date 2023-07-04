import React, { useEffect, useState } from "react";
import '../Css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import svg3 from '../img/shapes/shape-3.svg';
import { Link } from "react-router-dom";
import axios from 'axios';

const Laboratories = () => {

    const [laboratories, setLaboratories] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        axios
            .get('http://localhost:4000/lab/laboratories')
            .then((response) => {
                setLaboratories(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
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


                        {/* ---this where I want to get the lab that the admin approved------the first card original / the seconed modefied to get the data------------------------------------------------------------------ */}

                        {/* 
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
                                    <Link to="LabPage" className="read-more text-decoration-none">
                                        Go to the Lab <i className="lni lni-arrow-right" />
                                    </Link>
                                </div>
                                <div className="service-overlay img-bg" />
                            </div>
                        </div> */}


                        <div className="row">
                            {/* Render the list of laboratories */}
                            {laboratories.map((laboratory) => (
                                <div className="col-lg-4 col-md-6" key={laboratory._id}>
                                    <div className="service-item mb-30">
                                        <div className="service-icon mb-25">
                                            <img className="labimg" src={laboratory.images} alt="" />
                                        </div>
                                        <div className="service-content">
                                            <h4>{laboratory.labName}</h4>
                                            <p>{laboratory.phoneNumber}</p>
                                            <p>{laboratory.location}</p>
                                            {/* <Link to="LabPage" className="read-more text-decoration-none">
                                                Go to the Lab <i className="lni lni-arrow-right" />
                                            </Link> */}
                                            <Link to={`LabPage/${laboratory._id}`} className="read-more text-decoration-none">
                                                Go to the Lab <i className="lni lni-arrow-right" />
                                            </Link>
                                        </div>
                                        <div className="service-overlay img-bg" />
                                    </div>
                                </div>
                            ))}
                        </div>




                        {/* --------------------------------------------------------------------------------------------------------------------------------- */}
                        {/* <div className="col-lg-4 col-md-6">
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
                                        Biolab’s mandate is to provide high-quality laboratory
                                        operation by consolidated service delivery model.
                                    </p>
                                    <Link to="LabPage" className="read-more text-decoration-none">
                                        Go to the Lab <i className="lni lni-arrow-right" />
                                    </Link>
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
                                    <Link to="LabPage" className="read-more text-decoration-none">
                                        Go to the Lab <i className="lni lni-arrow-right" />
                                    </Link>
                                </div>
                                <div className="service-overlay img-bg" />
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            {/* ========================= Laboratory-section end ========================= */}
        </>
    )
}

export default Laboratories;
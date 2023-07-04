import React, { useEffect, useState } from 'react';
import svg3 from '../img/shapes/shape-3.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TestCards = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:4000/offers')
            .then((response) => {
                setOffers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleAddToCheckout = (offer) => {
        const selectedTests = sessionStorage.getItem('selectedTests');
        let tests = selectedTests ? JSON.parse(selectedTests) : [];

        // Check if the offer is already in the tests array
        const isTestAlreadyAdded = tests.some((test) => test._id === offer._id);

        if (!isTestAlreadyAdded) {
            tests = [...tests, offer];
            sessionStorage.setItem('selectedTests', JSON.stringify(tests));
        }
    };


    return (
        <>
            <section id="services" className="service-section pt-80 mb-5">
                <div className=" shape-3">
                    <img src={svg3} alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 mx-auto">
                            <div className="section-title text-center mb-55">
                                <h2 className="mb-15 wow fadeInUp" data-wow-delay=".4s">
                                    Hot Offers
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">
                                    A group of the most performed tests that
                                    <br className="d-none d-lg-block" /> is being worked on with the latest technologies.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {offers.map((offer) => (
                            <div className="col-lg-4 col-md-6" key={offer._id}>
                                <div className="service-item mb-30">
                                    <div className="service-icon mb-25"></div>
                                    <div className="service-content">
                                        <h1>{offer.labName}</h1>
                                        <h4>{offer.testName}</h4>
                                        <p>{offer.testDescription}</p>
                                        <p>Sample Type : {offer.sampleType}</p>
                                        <p>Test Duration : {offer.testTiming}</p>
                                        <p>Test Requirements : {offer.testConditions}</p>
                                        <p>Test Price : {offer.price}</p>
                                        <Link
                                            to="checkout"
                                            className="read-more text-decoration-none"
                                            onClick={() => handleAddToCheckout(offer)}
                                        >
                                            Add To Checkout <i className="lni lni-arrow-right" />
                                        </Link>
                                    </div>
                                    <div className="service-overlay img-bg" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestCards;

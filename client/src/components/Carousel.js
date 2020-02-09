import React from 'react';
import { useAuth0 } from "../react-auth0-spa";

export default function LandingCarousel() {

    const { isAuthenticated, loginWithRedirect } = useAuth0();

    return (
        <div
            id="carouselExampleCaptions"
            className="carousel slide carousel-fade fluid"
            data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://s3.amazonaws.com/files.gofox.com/wp-content/uploads/2019/11/vacation-travel-agents-1920x500.jpg" className="carousel-images d-block w-100" alt="Beach" />
                    <div className="carousel-text carousel-caption d-none d-md-block">
                        {!isAuthenticated && (
                            <button
                                type="button"
                                className="mb-2 btn btn-light landing-button"
                                onClick={() => loginWithRedirect({})}>Log in | Sign up
                        </button>
                        )}
                        <h2>Easy To Use Goal Tracker</h2>
                        <h6>Whether your saving for your next vacation or for retirement Smart Goals makes it easy to track your progress.</h6>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://signatureanalytics.com/wp-content/uploads/1920x500-fractional-cfo-services.jpg" className="carousel-images d-block w-100" alt="Graph" />
                    <div className="carousel-text carousel-caption d-none d-md-block">
                        {!isAuthenticated && (
                            <button
                                type="button"
                                className="mb-2 btn btn-light landing-button"
                                onClick={() => loginWithRedirect({})}>Log in | Sign up
                        </button>
                        )}
                        <h2>Track Your Goals</h2>
                        <h6>Add as many goals as you'd like without revealing personal information.</h6>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://www.chinalife.com.hk/sites/default/files/2019-10/golden-age-retirement-plan_0.jpg" className="carousel-images d-block w-100" alt="People" />
                    <div className="carousel-text carousel-caption d-none d-md-block">
                        {!isAuthenticated && (
                            <button
                                type="button"
                                className="mb-2 btn btn-light landing-button"
                                onClick={() => loginWithRedirect({})}>Log in | Sign up
                        </button>
                        )}
                        <h2>Manage Your Money</h2>
                        <h6>Take charge of your money without it leaving your pocket.</h6>
                    </div>
                </div>
            </div>
            <a
                className="carousel-control-prev"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a
                className="carousel-control-next"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

     

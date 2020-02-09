import React from 'react';
import {useAuth0} from "../react-auth0-spa";
import LandingCarousel from '../components/Carousel';
import MediaLanding from '../components/CardLanding';

export default function Landing() {

    const {isAuthenticated, loginWithRedirect} = useAuth0();

    return (
        <div className="landing-page">
            <img
                style={{ "max-height": "128px", "max-width": "128px" }}
                src="https://s3.amazonaws.com/designmantic-logos/logos/2020/Feb/small-8882-5e35ab1e710a9.png"
                className="mt-3 mb-3 card-img"
                alt="Smart Goals" />

            <MediaLanding/>
            
            <LandingCarousel/>
        </div>
    )
}
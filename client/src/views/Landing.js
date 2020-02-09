import React from 'react';
import LandingCarousel from '../components/Carousel';
import {useAuth0} from "../react-auth0-spa";

export default function Landing() {

    const {isAuthenticated, loginWithRedirect} = useAuth0();

    return (
        <div className="landing-page">
            <LandingCarousel />
            <div className="landing-text-back">
                <h1 className="landing-text">Smart Goals</h1>
                <br/>
                <p className="landing-text">Everyone wants to save more money, but it can be a
                    challenge. Most people struggle saving money for both their short-term and
                    long-term goals. In fact studies show that the amount people save is no where
                    near enough for them to retire. This is where smart goals can help. With Smart
                    Goals you can create and track your personal financial goals for both short term
                    and long term goals without having to pay for any sort of software or other
                    financial services. </p>
                <p className="landing-text">
                    Being able to visually track your progress can help you save
                    more money and put you on the right path for accomplishing your goals. Smart goals
                    also allows you to see what others are saving for without revealing any personal
                    information. Sign up now for free!
                </p>
                <br/>
                {!isAuthenticated && (
                    <button
                        type="button"
                        className="btn btn-light landing-button"
                        onClick={() => loginWithRedirect({})}>Log in | Sign up
                    </button>
                )}
                <br />
                <br />
                <img
                    className="landing-image"
                    src="https://fm-static.cnbc.com/awsmedia/chart/2019/2/13/fsi-march-2019-graph-1@2x.1552507696071.png?"
                    alt="savings-study"/>
                <br/>
                <br/>
            </div>
        </div>
    )
}
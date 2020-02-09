import React from 'react';

export default function MediaLanding() {
    

    return (
        <div className="card">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img
                        className="landing-image mt-3 card-img"
                        style={{ "max-height": "256px", "max-width": "256px" }}
                        src="https://fm-static.cnbc.com/awsmedia/chart/2019/2/13/fsi-march-2019-graph-1@2x.1552507696071.png?"
                        alt="savings-study" />
                </div>
                <div className="col-md-4">
                    <div className="card-body">
                        <p className="mt-1 landing-text">Everyone wants to save more money, but it can be a
                            challenge. Most people struggle saving money for both their short-term and
                            long-term goals. In fact studies show that the amount people save is no where
                            near enough for them to retire. This is where smart goals can help. With Smart
                            Goals you can create and track your personal financial goals for both short term
                            and long term goals without having to pay or reveal any personal information.
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-body">
                        <p className="mt-1 landing-text">With Smart Goals you can create and track all your financial goals
                            in one easy to use application. Sign up is free and there are no hidden fees. With all the news
                            about data leaks you can never be too safe with your personal and financial information. 
                            Smart Goals doesn't require you to provide us any information such as bank account or credit card numbers.  
                            Your money never has to leave your pocket providing no security risk and peace of mind.  </p>
                    </div>
                </div>
            </div>
        </div>
    )
}



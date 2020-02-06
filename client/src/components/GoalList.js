import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useAuth0 } from "../react-auth0-spa";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import API from '../utils/API';


export default function GoalList(props) {
    const { user } = useAuth0();
    const [userGoals, setUserGoals] = useState([]);
    const [goalUser] = useState(user.sub);
    
    useEffect(() => {
        console.log(props.newGoalAdded);
        props.resetNewGoal(false);
        API.getGoal(goalUser)
        .then(res => {
            setUserGoals(res.data);
        });
    }, [props.newGoalAdded]);
    
    console.log("userGoals: ", userGoals);
    return (
        <div>
            <Row sm="12">
                {userGoals.map(goal => {
                    return(
                    <Card body className="goal-layout">
                            <CircularProgressbar 
                                circleRatio={0.75} 
                                value={((goal.amount / goal.goalAmount).toFixed(2)) * 100} 
                                text={`${((goal.amount / goal.goalAmount).toFixed(2)) * 100}%`}
                                styles={buildStyles({
                                    rotation: 1 / 2 + 1 / 8,
                                    strokeLinecap: "butt",
                                    trailColor: "#eee"
                                })}
                                />
                        <CardTitle>{goal.title}</CardTitle>
                    </Card>
                    )
                })}
            </Row>
        </div>
    )
}



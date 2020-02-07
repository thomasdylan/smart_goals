import React, { useState } from 'react';
import { useAuth0 } from "../react-auth0-spa";
import { Row, Col, Button } from 'reactstrap';
import GoalList from './GoalList';
import GoalForm from './GoalForm';
import AdSense from 'react-adsense';

export default function Dashboard() {
    const { user } = useAuth0();
    const [newGoal, setNewGoal] = useState(false)
    return (
        <div className= "container">
            <Row>
                <Col sm='3'>
                    <AdSense.Google
                        client='ca-pub-1423704383315423'
                        slot='9575916933'
                    />
                </Col>
                
                <Col sm='6'>
                    <h3>Create Goal</h3>
                    <hr /> 
                    <GoalForm  newGoalAdded={setNewGoal}/>
                </Col>
                
                <Col sm='3'>
                    <h3>Your Goal</h3>
                    <hr /> 
                    <GoalList newGoalAdded={newGoal} resetNewGoal={setNewGoal}/>
                </Col>
            </Row>
        </div>
    )
}

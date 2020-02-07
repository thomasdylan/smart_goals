import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useAuth0 } from "../react-auth0-spa";
import {
    Card,
    CardTitle,
    CardText,
    Row,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap';
import API from '../utils/API';
import FormUpdate from '../components/FormUpdate';

export default function FullGoalList() {
    const { user } = useAuth0();
    const [userGoals, setUserGoals] = useState([]);
    const [goalUser] = useState(user.sub);
    const [isUpdating, setUpdating] = useState(false);

    useEffect(() => {
        setUpdating(false);
        API
            .getGoal(goalUser)
            .then(res => {
                setUserGoals(res.data);
            });
        console.log("is updating: ", isUpdating)
    }, [isUpdating]);

    const deleteGoal = (id) => {
        setUpdating(true);
        API.deleteGoal(id)
            .then(res => console.log("deleted goal ", res));
    }

    return (
        <div className="user-goals-container">
            <Row sm="12">
                {userGoals.map(goal => {
                    return (
                        <Card body className="full-goals">
                            <UncontrolledDropdown setActiveFromChild>
                                <DropdownToggle tag="a" className="nav-link" style={{ float: "right" }}>
                                    <Button className="goal-delete-button" color="danger"><strong>X</strong></Button>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>
                                        <p>Are you sure you want to delete?</p> <br />
                                        <Button className="btn" color="danger" onClick={() => { deleteGoal(goal._id) }}>Confirm Delete</Button>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <CircularProgressbar
                                className="goal-percentage"
                                circleRatio={0.75}
                                value={((goal.amount / goal.goalAmount).toFixed(2)) * 100}
                                text={`${((goal.amount / goal.goalAmount).toFixed(2)) * 100}%`}
                                styles={buildStyles({
                                    rotation: 1 / 2 + 1 / 8,
                                    strokeLinecap: "butt",
                                    trailColor: "#eee"
                                })} />
                            <CardTitle>{goal.title}</CardTitle>
                            <CardText>${goal.amount} / ${goal.goalAmount}</CardText>
                            <UncontrolledDropdown setActiveFromChild>
                                <DropdownToggle tag="a" className="nav-link">
                                    <Button color="success">Update</Button>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header>
                                        <FormUpdate goalKey={goal._id}
                                            updating={setUpdating}
                                            goalAmount={goal.goalAmount}
                                        />
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Card>
                    )
                })}
            </Row>
        </div>
    )
}

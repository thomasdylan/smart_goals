import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Confetti from 'canvas-confetti';
import API from '../utils/API';

const FormUpdate = (props) => {
    const [amount, setAmount] = useState();

    const FormSubmit = (e) => {
        e.preventDefault();
        const goalData = {
            amount: amount
        };

        API.updateGoal(props.goalKey, goalData)
            .then(() => console.log("Successfully updated goal"))
            .catch(err => console.log(err));
        if(amount >= props.goalAmount) {
            Confetti({
                particleCount: 300,
                spread: 360
            });
        }
        props.updating(true);
    };

    return (
        <Form inline onSubmit={FormSubmit}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="update" className="mr-sm-2">Update Amount</Label>
                <Input type="number" 
                       name="goalUpdate"
                       value={amount}
                       onChange={e => setAmount(e.target.value)} 
                       id="updateGoal" 
                       placeholder="1000" />
            </FormGroup>
            <Button type="submit" onClick={FormSubmit} color="success">Submit</Button>
        </Form>
    );
}

export default FormUpdate;
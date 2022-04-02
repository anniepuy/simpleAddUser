import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    //initialise empty state w/ array destructring to store entries as separate constants - setEnteredUsername
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

        //validation check
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }

        //forcing conversion from string to number with js +
        if(+enteredAge < 1) {
            return;
        }
        //forwarding data up to app.js
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username'
                type="text" 
                value={enteredUsername} 
                onChange={usernameChangeHandler} 
                />

                <label htmlFor='age'>Age (Years)</label>
                <input id='age' 
                type="number" 
                value={enteredAge} 
                onChange={ageChangeHandler} 
                />

                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;

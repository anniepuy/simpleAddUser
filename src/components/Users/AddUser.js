import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    //initialise empty state w/ array destructring to store entries as separate constants - setEnteredUsername
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        //validation check
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty value).'
            });
            return;
        }
        //forcing conversion from string to number with js +
        if(+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please set a valid age greater than 0.'
            });
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

    const errorHandler = () => {
        setError(null);
    };

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} /> }
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
        </>
    )
}

export default AddUser;

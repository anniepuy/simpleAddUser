import React from 'react';
import classes from './Card.module.css'

const Card = (props) => {

//addition of template literals in className passes CSS properties as props
    return (
        <div className={`${classes.card} ${props.className}`}>
            {props.children}
        </div>
    )

}

export default Card;
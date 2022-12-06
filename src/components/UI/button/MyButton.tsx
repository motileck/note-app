import React, {} from 'react';
import classes from './MyButton.module.css';




const MyButton: React.FC<{children:string, onClick:any}> = ({children, onClick})  => {
    return (
        <button onClick = {onClick} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;
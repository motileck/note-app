import React from 'react';
import classes from "./MyModal.module.scss";

const MyModal:React.FC<{
    children:any,
    visible: boolean,
    setVisible: any,
}> = ({children, visible, setVisible}) => {

    const rootClasses = [classes.myModal]
    if (visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;
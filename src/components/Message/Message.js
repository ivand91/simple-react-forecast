import React from 'react';

import './Message.css';

const message = ( props ) => {

    return (
        <div className="Message">
            <p>{props.msg}.</p>
        </div>
    )
};

export default message;
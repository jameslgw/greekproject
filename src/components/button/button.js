import React from 'react';
import './button.css'

const Button = (props) => {

    console.log(props.reveal)

    return <div>
        <button className="button" onClick={() =>
            <div>
                EOIUGHLIRUGHRELIUGELWGUIHIULGH
            </div>
        }> Hi </button>
    </div>
}

export default Button
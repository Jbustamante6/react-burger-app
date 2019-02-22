import React from 'react';


const buildControl = (props) =>(
    <div>
        <div>{props.label}</div>
        <button>Lees</button>
        <button>More</button>
    </div>
);

export default buildControl;
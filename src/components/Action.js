import React from 'react';

// Why stateless functional components ?
// performance - less 'overhead' to compile vs Class based component (e.g. no lifecyclehooks or state functionality)
const Action = (props) => (
    <div>
        <button
            className="big-button" 
            disabled={!props.hasOptions} 
            onClick={props.handlePick}
        >
            What should I do?
        </button>  
    </div>
);

export default Action;
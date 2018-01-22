import React from 'react';

const Option = (props) => (
    <div className="option">
    <p className="option__text">{props.count}. {props.optionText}</p>  
        <button 
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}
        >
        Remove
        </button>
    </div>
);
// stateless functional component
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }
export default Option;
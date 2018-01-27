// Higher Order Component - A component (HOC) that renders another regular component
// why ? 
// 1. allows us to reuse code 
// 2. Render hijacking
// 3. Prop manipulation
// 4. Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarnign = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {
                props.isAuthenticated ? 
                    <WrappedComponent {...props} /> : 
                    <p>Please login first</p>
            }
        </div>
    );
}

// alternative version of Info
const AdminInfo = withAdminWarnign(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="this is details" />, document.getElementById('app'));


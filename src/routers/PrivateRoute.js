import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import  Header  from '../components/Header';

export const PrivateRoute = ({ 
    isAuthenticated, 
    component: Component,
    // the rest e.g. exact true
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props} />
            </div>
        ) : (
            <Redirect to='/' />
        )
    )} /> 
);

// grab uid from state (check if user is authenticated)
const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
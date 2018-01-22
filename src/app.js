import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
// normalize => reset browser default css
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard
    </div>
)
const AddExpensePage = () => (
    <div>
        Addpage
    </div>
)
const EditExpensePage = () => (
    <div>
        Edit
    </div>
)
const HelpPage = () => (
    <div>
        Help
    </div>
)

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
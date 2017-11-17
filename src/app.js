import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const ExpenseDashboard = () => (
  <div>
    this is from dashboard component
  </div>
);

const CreatePage = () => (
  <div>
    this is from add expensify
  </div>
);

const EditPage = () => (
  <div>
    this is from edit expensify
  </div>
);

const HelpPage = () => (
  <div>
    this is from help expensify
  </div>
);

const NotFoundPage = () => (
  <div>
    no such page 404!!
  </div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboard} exact={true}/>
      <Route path="/create" component={CreatePage}/>
      <Route path="/edit" component={EditPage}/>
      <Route path="/help" component={HelpPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'))
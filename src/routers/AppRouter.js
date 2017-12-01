import React from 'react';
import {Route, Switch, Router} from 'react-router-dom';
import createHistory  from 'history/createBrowserHistory';
import ExpenseDashboard from '../components/ExpenseDashboard';
import Header from '../components/Header';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import HelpPage from '../components/HelpPage';
import ExpenseLoginPage from '../components/ExpenseLoginPage';

export const history = createHistory();

const AppRouter = () => (
<Router history={history}>
  <div>
    <Header/>    
    <Switch>
      <Route path="/" component={ExpenseLoginPage} exact={true}/>
      <Route path="/dashboard" component={ExpenseDashboard}/>
      <Route path="/create" component={AddExpensePage}/>
      <Route path="/edit/:id" component={EditExpensePage}/>
      <Route path="/help" component={HelpPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </div>
</Router>
);


export default AppRouter;
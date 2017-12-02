import React from 'react';
import {Route, Switch, Router} from 'react-router-dom';
import createHistory  from 'history/createBrowserHistory';
import ExpenseDashboard from '../components/ExpenseDashboard';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import ExpenseLoginPage from '../components/ExpenseLoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
export const history = createHistory();

const AppRouter = () => (
<Router history={history}>
  <div>    
    <Switch>
      <PublicRoute path="/" component={ExpenseLoginPage} exact={true}/>
      <PrivateRoute path="/dashboard" component={ExpenseDashboard}/>
      <PrivateRoute path="/create" component={AddExpensePage}/>
      <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </div>
</Router>
);


export default AppRouter;
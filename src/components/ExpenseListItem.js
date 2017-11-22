import React from 'react';
import {connect} from 'react-redux'; 
import {Link} from 'react-router-dom' 


const ExpensesListItem = ({dispatch, description ,id, amount, createAt})=>(
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
      {amount}
      {createAt}
      </p>
    </div>
);

export default connect()(ExpensesListItem);
import React from 'react';

const Action = (props) =>(
    <div>
      <button className="big-button" 
        onClick={props.handlePick} disabled={!props.hasOptions}>
        What Should I DO !!!
      </button>
    </div>
);

export default Action;
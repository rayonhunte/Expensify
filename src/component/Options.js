import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
      <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button className="button button--link"  onClick={props.handleDeleteOptions}>Remove All</button>
      </div>
      {props.options.length === 0 && <p className="widget__element">Add an option to get started</p>}
      {
        props.options.map((option, index) => {
        return <Option optionText={option} 
                       key={index} 
                       count={index + 1} 
               handelDeleteOption = {props.handelDeleteOption}
        />
        })
      }
    </div>
);

export default Options;

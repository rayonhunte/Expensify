import React from 'react';
const Option = (props) =>(
    <div className="option">
      <p className="option_text">{props.count}. {props.optionText}</p> 
      <button className="button button--link" onClick={
        (e)=>{
          props.handelDeleteOption(props.optionText)
        }}>
        Delete Option
      </button>
    </div>
);

export default Option;
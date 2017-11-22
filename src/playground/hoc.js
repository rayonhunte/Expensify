import React from 'react'
import ReactDOM from 'react-dom'
// HOC - component that's renders other components
// reuse code 
// render hijacking 
// Prop manipulation
// Abstract state




const Info = (props)=>(
  <div>
    <h1>Info</h1>
    <p>The Info is: {props.info}</p>
  </div>
);


const withAdminWarning = (WrappedComponent)=>{
  return (props) => (
    <div>
      {props.isAdmin && <p>This is Private Info</p> }
      <WrappedComponent {...props}/>
    </div>
  );
}

const requireAuth = (WrappedComponent)=>{
  return (props)=>(
    <div>
        {props.isAuth && <WrappedComponent {...props}/> || <p> Sorry you need to login</p>} 
    </div>
  )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuth(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="This is cool stuff my info"/>, document.getElementById('app'))ReactDOM.render(<AdminInfo isAdmin={true} info="This is cool stuff my info"/>, document.getElementById('app'))ReactDOM.render(<AdminInfo isAdmin={true} info="This is cool stuff my info"/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuth={true} info="you are singed in "/>, document.getElementById('app'))



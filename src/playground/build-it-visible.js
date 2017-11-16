
class VisibilityToggle extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      visibility: false
    }
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }
  handleToggleVisibility(){
    this.setState((prevState)=>{
      return {
        visibility: !prevState.visibility
      }
    })
  }
  render(){
    return (
        <div>
          <h1>Visibility App</h1>
          <button onClick={this.handleToggleVisibility}>
            {this.state ? 'Show Details': 'Hide Details'}
          </button>
          {this.state.visibility && <p>This is the detais</p>}
        </div>
    )
  }
}


ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));

/*const appRoot = document.getElementById("app");

const app = {
  title: "Visibility Toggle",
  status: true
}


const toggleShow = ()=>{
  // if(app.status){
  //   app.status = false;
  // }else{
  //   app.status = true;
  // }
  // a better toggle switch
  app.status = !app.status;
  renderApp();
  console.log(app.status);
}



const renderApp = () =>{

var template = (
  <div>
    <h1>{app.status && app.title}</h1>
    <button onClick={toggleShow}>
      {app.status ? 'Hide Details' : 'Show Details'}
    </button>
  </div>
);

ReactDOM.render(template, appRoot);
}


renderApp();
*/

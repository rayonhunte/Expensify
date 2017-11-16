class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleOption = this.handleOption.bind(this);
    this.handelDeleteOption = this.handelDeleteOption.bind(this);
    this.state = {
      options: []
    }
  }
  //life cycle
  componentDidMount(){
    try{
    const json = localStorage.getItem('options')
    const options = JSON.parse(json);
    if(options){
      this.setState(()=>({options}))
    }
  }
  catch (e){
    console.log(e);
  }
  }
  componentDidUpdate(prevProps,prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log("saved options")
    }
  }
  componentWillUnmount(){
    console.log("test");
  }
  handleDeleteOptions(){
    this.setState(()=>({options: []}))
  }

  handelDeleteOption(optionToRemove){
    this.setState((prevState)=>({
      options: prevState.options.filter((option)=> optionToRemove !== option)
    }))
  }

  handlePick() {
      const ranNum = Math.floor(Math.random() * this.state.options.length)
      alert(this.state.options[ranNum]);
  }

  handleOption(option){
    if(!option){
      return "Enter A Vaild Option !!!"
    }else if (this.state.options.indexOf(option)> -1){
      return "Option Already exists"
    }
    this.setState((prevState)=>({
      options: prevState.options.concat(option)
    }))
  }

  render(){
    const subtitle = 'Put your life in the hands of a computer?'
    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action 
        hasOptions={this.state.options.length > 0}
        handlePick = {this.handlePick}
        />
        <Options 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handelDeleteOption = {this.handelDeleteOption}
        />
        <AddOption  
        options={this.state.options}
        handleAddOption = {this.handleOption}
        />
      </div>
    );
  }
}




class AddOption extends React.Component{
  constructor(props){
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(()=>({ error }))
    if(!error){
      e.target.elements.option.value = ''
    }
  }
  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

const Header = (props)=>{
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );

}

// add default props
Header.defaultProps  = {
  title: 'Indecision'
};

const Action = (props) =>{
  return(
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What Should I DO !!!
      </button>
    </div>
  );
}
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Add an option to get started</p>}
      {
        props.options.map((option, index) => {
        return <Option optionText={option} key={index} 
               handelDeleteOption = {props.handelDeleteOption}
        />
        })
      }
    </div>
  );
}

const Option = (props) =>{
  return (
    <div>
      {props.optionText} 
      <button onClick={
        (e)=>{
          props.handelDeleteOption(props.optionText)
        }}>
        Delete Option
      </button>
    </div>
  );
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))
// app obj

const app = {
  title: "My Indecision",
  subTitle: "react is cool",
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    console.log(option);
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
}

const reset = () => {
  app.options = [];
  renderApp();
}


const onMakeDecision = () => {
  const randoNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randoNum];
  console.log(randoNum);
  console.log(option);
  alert(option)
}


const appRoot = document.getElementById("app");


const renderApp = () => {
  //JSX - JavaScript XML 
  var template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? `Here Are your options`: 'No Options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do ?</button>
      <button onClick={reset}>RemoveAll</button>
      <ol>
      {
        app.options.map((option, index)=>{
          console.log(index);  
          return <li key={index}>  {option}  </li>
        })
      }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button type="submit">Add Option</button>
      </form>
    </div>);
    ReactDOM.render(template, appRoot);
}


renderApp();
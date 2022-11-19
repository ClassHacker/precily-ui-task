import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);
  console.log(process.env.REACT_APP_BASE_URL)
  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}api`)
    .then(res => {
      console.log(res)
      return res.json()
    })
    .then((json) => {
      console.log(json);
      setData(json.msg)
    })
    .catch(err => console.log(err));
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> {data === null ? "Loading..." : data} </p>
        <div>
          
        </div>
      </header>
    </div>
  );
}

export default App;

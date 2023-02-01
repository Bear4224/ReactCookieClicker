import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import cookie from './cookie.png'
import reportWebVitals from './reportWebVitals';
//To run, make sure to do npm install in the cookieclicker
//directory, then npm start to run it.

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  handleClick(){
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    const count = this.state.count;
    return (
      <div className="App">
      <header className="App-header">
        <br></br>
        <br></br>
        <button className="cookieButton" onClick={() => this.handleClick()}><img src={cookie} className="App-logo" alt="logo" /></button>
        <br></br>
        <br></br>
        <p class="p1">
          Click me ...
        </p>
        <p class="p1">
          {this.state.count}
        </p>
      </header>
    </div>
    );
  }

}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

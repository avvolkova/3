import logo from './logo.svg';
import './App.css';
import MyState from './state/state';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
    <MyState/>
      </header>
    </div>
    </>
  );
}

export default App;

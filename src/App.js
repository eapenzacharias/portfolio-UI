import './assets/styles/App.css';
import NavBar from './components/Navbar';
import MyText from './components/Typography';

function App() {
  return (
    <>
      <NavBar />
      <div className="App bg-surfaceL">
        <header className="App-header">
          <MyText text="Portfolio UI" type="h1" />
          <MyText text="Testing Components" type="h3" />
        </header>
        <header className="App-header">
          <MyText text="Portfolio UI" type="h1" />
          <MyText text="Testing Components" type="h3" />
        </header>
      </div>
    </>
  );
}

export default App;

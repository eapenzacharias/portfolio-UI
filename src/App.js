import './assets/styles/App.css';
import NavBar from './components/Navbar';
import { MainHeading, SubHeading } from './components/Typography';

function App() {
  return (
    <>
      <NavBar />
      <div className="App bg-surfaceL">
        <header className="App-header">
          <MainHeading text="Portfolio UI" />
          <SubHeading text="Testing Components" />
        </header>
        <header className="App-header">
          <MainHeading text="Portfolio UI" />
          <SubHeading text="Testing Components" />
        </header>
      </div>
    </>
  );
}

export default App;

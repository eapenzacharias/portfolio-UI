import './assets/styles/App.css';
import { MainHeading, SubHeading } from './components/Typography';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainHeading text="Portfolio UI" />
        <SubHeading text="Testing Components" />
      </header>
    </div>
  );
}

export default App;

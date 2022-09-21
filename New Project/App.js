import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import { Message } from './components/Message'

function App() {
  return (
    <div className="App">
        {/* <Greet name='Bruce' heroName='Batman'/>
        <Greet name='Clark' heroName='Superman'/>
        <Greet name='Diana' heroName='Wonder Woman'>
          <button>Action</button>
          <p>This is children props</p>
        </Greet> */}
        <Message />
    </div>
  );
}

export default App;

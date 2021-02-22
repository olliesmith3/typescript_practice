import React from 'react';
import { TextField } from './components/TextField';
import { Counter } from './components/Counter';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <TextField text={"hello"} person={{firstName: 'John', lastName: 'Deer'}}/>
      {/* Hit CTRL + SPACE to  see the props you need to pass*/}
      <Counter>
        {(count, setCount) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  );
}

export default App;

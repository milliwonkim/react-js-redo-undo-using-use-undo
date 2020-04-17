import React from 'react';
import useUndo from 'use-undo';

import './App.css';

const App = () => {

  const [
    countState,
    {
      set: setCount,
      reset: resetCount,
      undo: undoCount,
      redo: redoCount,
      canUndo,
      canRedo
    }
  ] = useUndo(0);
  const { present: presentCount } = countState;

  return (
    <div className="App">
      <div className="container">
        <p>You Clicked { presentCount } times </p>
        <button key="increment" onClick={() => setCount(presentCount + 1)}> + </button>
        <button key="decrement" onClick={() => setCount(presentCount - 1)}> - </button>
        <button key="decrement" onClick={undoCount} disabled={!canUndo}> Undo </button>
        <button key="decrement" onClick={redoCount} disabled={!canRedo}> Redo </button>
        <button key="reset" onClick={() => resetCount(0)}>Reset To 0</button>
      </div>
    </div>
  );
}

export default App;

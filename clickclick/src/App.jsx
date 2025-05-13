import { useState } from 'react';
import './App.css';

function App() {
  const [cursorIndex, setCursorIndex] = useState(0);

  const cursors = [
    'default',
    'pointer',
    'crosshair',
    'move',
    'text',
    'wait',
    'help',
    'not-allowed'
  ];

  const handleClick = () => {
    setCursorIndex((prevIndex) => (prevIndex + 1) % cursors.length);
  };

  return (
    
    <div
      className='container'
      style={{ cursor: cursors[cursorIndex], height: '100vh' }}
      onClick={handleClick}
    ><h1 className='container'>eiwfhqoeaihge</h1>
    </div>

  );
}

export default App;
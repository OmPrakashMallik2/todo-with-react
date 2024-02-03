import './App.css';

function App() {
  return (
    <div className="App">

      <h1>TO DO List</h1>

      <div className='input-filed'>
        <input type='text' placeholder='Enter your task' />
        <button>Add</button>
      </div>

      <div className='tasks'>
        <h2>Task here</h2>
      </div>

    </div>
  );
}

export default App;

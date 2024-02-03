import './App.css';
import App2 from './App2';
import AppDemo from './AppDemo';
import Todo from './Todo';

function App() {

  const persons = [
    { id: 1, name: "Santosh Kumar Mallik", age: 43 },
    { id: 2, name: "Rita Devi", age: 38 },
    { id: 3, name: "Om Prakash Mallik", age: 23 },
    { id: 4, name: "Jay Prakash Mallik", age: 21 },
    { id: 5, name: "Sachin Kumar Mallik", age: 19 }
  ];

  const user = {
    name: "Rashmika Mandanna",
    url: "https://i.pinimg.com/564x/3f/ed/04/3fed0423a3ec6b7befff7848ecdc8e18.jpg",
    height: 400
  };

  const apple = "Om Prakash Mallik";

  return (
    <div className="App">

      <Todo />

      {/* <App2 /> */}

      {/* <AppDemo persons={persons}/>*/}

      {/* <h1>{apple}</h1> */}

      {/* <div>
        <h1>{user.name}</h1>
        <img
          src={user.url}
          alt={user.name}
          style={{
            height: user.height,
            width: user.height
          }}
        />
      </div> */}

    </div>
  );
}

export default App;

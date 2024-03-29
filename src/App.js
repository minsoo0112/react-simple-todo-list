import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos([toDo, ...toDos]);
    setToDo("");
  };

  const onDelete = (e) => {
    const newToDos = toDos.filter((value, index) => index !== parseInt(e.target.value));
    setToDos(newToDos);
  };

  return (
    <div>
      <h2>My To Dos ({toDos.length})</h2>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do ..." />
        <button>Add To Do </button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button value={index} onClick={onDelete}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

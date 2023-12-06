import { CompReload } from "./CompReload";
import { Counter } from "./Counter";
import { CounterClass } from "./CounterClass";
import { Input } from "./Input";
import { Name } from "./Name";
import { TodoListClass } from "./TodoListClass";
import { TodoListItemClass } from "./TodoListItemClass";
import "./style.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Malay");
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setName("Malaya Nayak");
    setCounter((currentCounter) => {
      return currentCounter + 1;
    });
  }

  return (
    <div id="largeDiv" className="large">
      <Name>
        <h1 onClick={handleClick}>
          {name} {counter}
        </h1>
      </Name>
      <Counter/>
      <CounterClass/>
      <Input/>
      <h1>Todo List</h1>
      <TodoListClass></TodoListClass>
      <TodoListItemClass isComplete={true}>React Study</TodoListItemClass>

      <CompReload></CompReload>
    </div>
  );
}

export default App;

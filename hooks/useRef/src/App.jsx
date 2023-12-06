import { useEffect, useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus()
  },[])

  useEffect(() => {
    console.log(inputRef.current.value)
  }, [count])

  return (
    <>
      <input
        ref={inputRef}
        value={count}
        onChange={(e) => {
          setCount(() => setCount(e.target.value));
        }}
      ></input>
    </>
  );
}

export default App;

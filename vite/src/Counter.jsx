import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div
      onClick={() => {
        setCounter((currentCounter) => {
          return currentCounter + 1;
        });
      }}
    >
      Count using Function Component: {counter}
    </div>
  );
}

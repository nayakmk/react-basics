import { useState } from "react";

export function Input() {
  const [name, setName] = useState("Malaya");

  return (
    <input
      type="text"
      value={name}
      onChange={(elem) => {
        console.log("Previous Value", {name});
        setName(elem.target.value);
    }}
    />
  );
}
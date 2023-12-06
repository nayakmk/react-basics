import { useEffect, useState } from "react";

export function CompReload() {
  const [reload, setReload] = useState(false);

  useEffect(() => {
    console.log("Inside Effect");

    return () => {
      console.log("Inside Cleanup");
    };
  }, [reload]);

  return (
    <div>
      <button
        onClick={() => {
          setReload(!reload);
        }}
      >
        Reload
      </button>
      {reload && <span key={Math.random()}>I am Invincible !</span>}
    </div>
  );
}

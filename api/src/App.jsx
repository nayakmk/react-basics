import { useEffect, useState } from "react";

function App() {
  //
  const userApi = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    setUsers(undefined);

    const controller = new AbortController();

    fetch(userApi, { signal: controller.signal })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        if (err?.name === "AbortError") return;
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  console.log(users);

  let jsx;

  if (loading) {
    jsx = <h2>Loading...</h2>;
  } else if (error != null) {
    jsx = <h2>Error...</h2>;
  } else {
    jsx = JSON.stringify(users);
  }

  return (
    <div>
      <h1>Users</h1>
      {jsx}
    </div>
  );
}

export default App;

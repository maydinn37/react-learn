import { useEffect, useState } from "react";
function App() {
  const [users, setUsers] = useState(false);

  const addPost = (data) => {
    const headers = new Headers();
    headers.append("Authorization", "Bearer Mert12345");
    headers.append("Content-type", "application/json");

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));

    addPost({
      userId: 1,
      title: "Örnek Post",
      body: "post içeriği",
    });
  }, []);

  return (
    <>
      ,
      <ul>
        {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
}

export default App;

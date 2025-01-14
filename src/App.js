import logo from "./logo.svg";
import styles from "./App.module.css";
import Test from "./test.js";
import { Title } from "./component.js";
import Bootstrap from "./bootstrap.js";
const Todos = ["todo1", "todo2", "todo3"];

function App() {
  console.log(styles);

  return (
    <div className={styles.App}>
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme="dark">{process.env.NODE_ENV}</Title>
      <p>{process.env.REACT_APP_API_URL}</p>
      <Test className="App" />

      {process.env.NODE_ENV === "production" && (
        <>
          <img src="../logo192.png" />
          <img src="../logo192.png" />
          <img src={logo} />
          <img src={logo} />
        </>
      )}
      <Bootstrap />
      <Title theme="dark">4.Ders</Title>
      <main>
        <h1
          id="main"
          className="test"
          tabIndex={3}
          style={{
            color: "red",
            backgroundColor: "grey",
            paddingBottom: "10px",
            paddingTop: "10px",
            textAlign: "center",
          }}
        >
          MydınDevelop
        </h1>
        <label
          htmlFor="search"
          tabIndex={2}
          onClick={() => alert("Arama Yapıldı")}
        >
          Arama
        </label>
        <input type="text" id="search" tabIndex={1} />
        <ul>
          {Todos.map((todo, key) => (
            <li key="index">{todo}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

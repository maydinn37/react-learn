import logo from "./logo.svg";
import styles from "./App.module.css";
import Test from "./test.js";
import { Title } from "./companents.js";
import Bootstrap from "./bootstrap.js";

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
    </div>
  );
}

export default App;

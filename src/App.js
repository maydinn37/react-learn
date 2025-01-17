import logo from "./logo.svg";
import styles from "./App.module.css";
import Test from "./test.js";
import { Title } from "./component.js";
import Bootstrap from "./bootstrap.js";
import Btn from "./components/Btn.js";
import "./components/tailwind.css";
import Tab from "./components/Tab.js";
import { useState, useRef, useReducer } from "react";
import todoReducer from "./reducers/todoReducer.js";
import TestComponent from "./components/TestComponent.js";

const Todos = ["todo1", "todo2", "todo3"];

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [show, setShow] = useState(false);
  const inputRef = useRef();
  const focusInput = () => inputRef.current.focus();
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    todo: "",
  });

  const submitHandel = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      todo: state.todo,
    });
  };
  const onChange = (e) =>
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
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
            fontSize: "30px",
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
          {Todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </main>
      <Title theme="dark">5.Ders</Title>
      <Btn>Buton Örneği</Btn>
      <Btn variant="Primary">Buton Örneği</Btn>
      <Btn variant="Danger">Buton Örneği</Btn>
      <Btn variant="Warning">Buton Örneği</Btn>
      <div style={{ padding: 20 }}>
        <button onClick={() => setActiveTab(0)} className="btn btn-danger">
          Aktif Tab'ı değiştir
        </button>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab}>
          <Tab.Panel title="Profil">Profil Menüsü</Tab.Panel>
          <Tab.Panel title="Hakkında">Hakkında Menüsü</Tab.Panel>
          <Tab.Panel title="Ayarlar">Ayarlar Menüsü</Tab.Panel>
        </Tab>
      </div>
      <Title theme="dark">6.Ders</Title>
      <div className="bg-gray-400 d-flex flex-col justify-content-center">
        <button
          className="btn btn-danger mt-4 mb-4 w-20 align-self-center "
          onClick={() => setShow((show) => !show)}
        >
          {show ? "Gizle" : "Göster"}
        </button>
        {show && <TestComponent />}
      </div>
      <div className="bg-gray-200">
        <Title theme="dark">7. Ders</Title>
        <h1 className="text-center fs-1 mt-2"> useRef() - useForward() </h1>
        <input
          className="m-4 border border-3 border-success "
          type="text"
          ref={inputRef}
        />
        <button className="ml-2 btn btn-dark" onClick={focusInput}>
          Focusla
        </button>
      </div>
      <Title theme="dark">8. Ders</Title>
      <div>
        <h1>Todo App</h1>
        <form onSubmit={submitHandel}>
          <input type="text" value={state.todo} onChange={onChange} />
          <button className="btn btn-dark" disabled={!state.todo} type="submit">
            Ekle
          </button>
        </form>
        <ul>
          {state.todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

import { Provider, Auth } from "./context/index.js";
import Home from "./components/Home.js";
function App() {
  return (
    <Provider>
      <Auth>
        <Home />
      </Auth>
    </Provider>
  );
}

export default App;

import { Provider, Auth } from "./context";
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

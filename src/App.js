import { Link, RouterProvider } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <div>list of routes</div>
      <Link to="/">Monitor</Link>
      <Link to="/design">Design</Link>

      <Routes />
    </div>
  );
}

export default App;

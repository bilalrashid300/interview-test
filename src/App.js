import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import Home from "./views/Home/home";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router> */}
      <Home />
    </div>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from './components/Home/Home';
import NotFound from "./components/NotFound/NotFound";
import ShowDetail from "./components/ShowDetail/ShowDetail";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/country/:nationId">
          <ShowDetail />
        </Route>
        <Route path="/*" exact>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

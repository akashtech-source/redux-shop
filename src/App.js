import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Provider} from "react-redux";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Cart from "./components/Cart";
import store from "./Store";
import Detail from "./components/Detail";

function App() {
  return (
    <Router>
      <Provider store={store}>
      <Switch>
      
      <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/detail/:id">
          <Detail></Detail>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
        
      </Switch>
      </Provider>
    </Router>
  );
}

export default App;

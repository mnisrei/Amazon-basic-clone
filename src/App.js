import './App.css';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from "./Header";
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function App() {
  //Data layer
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    //listener for login register change
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      return ((authUser) ?
        dispatch({ type: "SET_USER", user: authUser }) :
        dispatch({ type: "SET_USER", user: null })
      )
    });
    return () => {
      //clean up operation
      unsubscribe();
    }
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

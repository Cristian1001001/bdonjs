import React from 'react';
import 'materialize-css';
import NavBar from "./components/nav-bar";
import {BrowserRouter as Router} from 'react-router-dom';
import {UseRoutes} from "./route";
import {store} from "./redux/store";
import {Provider} from "react-redux";


function App() {
  return(
      <Provider store={store}>
          <Router>
              <NavBar/>
              <div>
                <UseRoutes/>
              </div>
          </Router>
      </Provider>
  )
}

export default App;

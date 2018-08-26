import './App.css';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import store from './store/store';
import Dashboard from './containers/Dashboard/Dashboard';
import DynamicForm from "./containers/Forms/DynamicForm";
class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <React.Fragment>

          <BrowserRouter>

          <React.Fragment>
          <ul className="uk-iconnav uk-flex uk-flex-middle">
            <li><Link data-uk-icon="icon: home" to="/"></Link></li>


          </ul>


            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/form" component={DynamicForm} />
            </Switch>
            </React.Fragment>
            </BrowserRouter>



        </React.Fragment>


      </Provider>

    );
  }
}

export default App;

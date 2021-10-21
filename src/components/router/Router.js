import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Redux from '../reduxUI/ReduxUI';
import Todo from '../todo/Todo';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-default" role="navigation">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/reactjs">
              REACT JS
            </Link>
          </div>

          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/todo">Todo</Link>
              </li>
              <li>
                <Link to="/redux">Redux</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="link">Link</a>
              </li>
              <li className="dropdown">
                <a href="a" className="dropdown-toggle" data-toggle="dropdown">
                  Dropdown <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="action">Action</a>
                  </li>
                  <li>
                    <a href="another-action">Another action</a>
                  </li>
                  <li>
                    <a href="something-else-here">Something else here</a>
                  </li>
                  <li>
                    <a href="separated-link">Separated link</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid center">
          <div className="row">
            <div className="col-sm-2 gray"></div>
            <div className="col-sm-8">
              <Switch>
                <Route path="/todo">
                  <Todo />
                </Route>
                <Route path="/redux">
                  <Redux />
                </Route>
              </Switch>
            </div>
            <div className="col-sm-2 gray"></div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Router;
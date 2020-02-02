import React, {Fragment} from 'react';
import {Route} from "react-router-dom";
import {HashLink as Link} from "react-router-hash-link";
import MainFormContainer from './Containers/MainFormContainer';
import './App.css';

const App = () => (
  <Fragment>
    <header>
      <ul className={"header"}>
        <li>
          <Link smooth="true" to="#IP_input_form">
            Input form
          </Link>
        </li>
        <li>
          <Link smooth="true" to="#IP_result_current">
            Results
          </Link>
        </li>
        <li>
          <Link smooth="true" to="#IP_result_history">
            History
          </Link>
        </li>
      </ul>
    </header>
    <main>
      <Route exact path="/" component={MainFormContainer}/>
    </main>
  </Fragment>
);

export default App;

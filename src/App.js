import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import MainFormContainer from './Containers/MainFormContainer';
import './App.css';

const App = () => (
    <Fragment>
      <main>
        <Route path="/" component={MainFormContainer}/>
      </main>
    </Fragment>
);

export default App;

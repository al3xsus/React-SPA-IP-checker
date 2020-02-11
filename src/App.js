import React, {Fragment} from 'react';
import MainFormContainer from './Containers/MainFormContainer';
import './App.css';

const App = () => (
    <Fragment>
        <header>
            <ul className={"header"}>
                <li>
                    <a href={'#IP_input_form'}>Input form</a>
                </li>
                <li>
                    <a href={'#IP_result_current'}>Results</a>
                </li>
                <li>
                    <a href={'#IP_result_history'}>History</a>
                </li>
            </ul>
        </header>
        <main>
            <MainFormContainer/>
        </main>
    </Fragment>
);

export default App;

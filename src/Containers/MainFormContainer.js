import React, {Component} from 'react';
import {Container, Divider, Loader, Segment} from 'semantic-ui-react'

import ResultForm from '../Components/ResultForm'
import Stub from '../Components/Stub'
import FormHeader from '../Components/FormHeader'
import {checkInput} from "../Components/AuxFns";
import IPForm from "../Components/IPForm";
import ErrorStub from "../Components/ErrorStub";

class MainFormContainer extends Component {
  
  defaultState = {
    currentSearch: '',
    currentResult: null,
    oldData: [],
    isLoading: false,
    error: null
  };
  
  constructor(props) {
    super(props);
    this.state = {...this.defaultState}
  }
  
  componentDidMount() {
    // localStorage.clear();
    this.hydrateStateWithLocalStorage();
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }
  
  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    this.saveStateToLocalStorage();
  }
  
  hydrateStateWithLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key) && key !== 'isLoading' && key !== 'error') {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({[key]: value});
        } catch (e) {
          this.setState({[key]: value});
        }
      }
    }
  }
  
  saveStateToLocalStorage() {
    for (let key in this.state) {
      if (key !== 'isLoading' && key !== 'error') {
        localStorage.setItem(key, JSON.stringify(this.state[key]))
      }
    }
  }
  
  handleChange = (e, {value}) => {
    const newState = {...this.state};
    newState.currentSearch = value;
    if (newState.currentResult !== null) {
      newState.currentResult = null;
    }
    this.setState(newState);
  };
  
  loadData = async () => {
    const {currentSearch} = this.state;
    this.setState({isLoading: true});
    try {
      let [geoIP, providerIP] = await Promise.all([
        fetch(`https://api.2ip.ua/geo.json?ip=${currentSearch}`),
        fetch(`https://api.2ip.ua/provider.json?ip=${currentSearch}`)
      ]);
      let [geoIPdata, providerIPdata] = await Promise.all([
        await geoIP.text(),
        await providerIP.text()
      ]);
      geoIPdata = JSON.parse(geoIPdata);
      providerIPdata = JSON.parse(providerIPdata);
      const newState = {...this.state};
      newState.currentResult = [geoIPdata, providerIPdata];
      newState.oldData.push([newState.currentSearch, ...newState.currentResult]);
      newState.isLoading = false;
      this.setState(newState);
    } catch (error) {
      console.error(error);
      this.setState({isLoading: false, error})
    }
  };
  
  returnOldDataList = (oldData) => {
    let newData = oldData.reverse();
    return newData.map((data, i) => <ResultForm key={i} currentResult={[data[0], data[1], data[2]]}/>);
  };
  
  render() {
    const {currentSearch, currentResult, oldData, isLoading, error} = this.state;
    if (error) {
      return <ErrorStub message={error.message}/>;
    }
    if (isLoading) {
      return <Loader active/>
    }
    return (
      <div className="App">
        <Container text>
          <FormHeader/>
          <Segment id="IP_input_form">
            <IPForm
              searchValue={currentSearch}
              handleSearchChange={this.handleChange}
              checkForErrors={checkInput}
              handleInfoButtonClick={this.loadData}
            />
          </Segment>
          <Divider horizontal>Results</Divider>
          <Segment id="IP_result_current" placeholder>
            {
              currentResult ? <ResultForm currentResult={[currentSearch, ...currentResult]}/> :
                <Stub/>
            }
          </Segment>
          <Divider horizontal>History</Divider>
          <Segment id="IP_result_history" placeholder>
            {
              oldData ? this.returnOldDataList(oldData) :
                <Stub/>
            }
          </Segment>
        </Container>
      </div>
    );
  }
}

export default MainFormContainer;

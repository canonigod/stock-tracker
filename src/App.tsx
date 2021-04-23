import React, { ChangeEvent, useState, useReducer } from 'react';
// import { getFinanceDataFailure, getFinanceDataRequest, getFinanceDataSuccess } from './actions';
import { GET_FINANCE_DATA_FAILURE, GET_FINANCE_DATA_REQUEST, GET_FINANCE_DATA_SUCCESS } from "./constants";
import { reducer, initialState } from './reducer';
import { Button, InputField, ContainerDiv, Copy} from './styled'
import * as ReactBootStrap from 'react-bootstrap'
import axios from 'axios'
import Stocks from './Stocks';

const App = () => {
  const [ticker, setTicker] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  function loadData() {
    /* Make a GET request to IEX Cloud API */
    const url = `https://sandbox.iexapis.com/stable/stock/${ticker}/quote?token=Tsk_678b4f8a0c3b4032b11c7568fb24dc17`;
    dispatch({ type: GET_FINANCE_DATA_REQUEST });
    axios.get(url)
      .then(res => {
        setTicker('');
        console.log(res.data)
        dispatch({ type: GET_FINANCE_DATA_SUCCESS, response: res.data });
        console.log(res.data)
      }).catch(error => {
        dispatch({ type: GET_FINANCE_DATA_FAILURE, error });
      })  
  }
  
// Grabbing input value
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTicker(value);
  }

// Calling the API upon button click
  const handleSearchClick = () => {
    loadData();
  }

  return (
    <div className="App">
      <ContainerDiv>
        <InputField
          type="text"
          onChange={handleInputChange}
          value={ticker}
          placeholder="Stock Ticker"
        />
        <Button
          type="button"
          onClick={handleSearchClick}
        >
          Search
        </Button>
        {
          state.isLoading
          ? <ReactBootStrap.Spinner animation="border" /> // Displaying spinner while data is being loaded

          : state.error
              ? <Copy>Invalid Ticker Symbol.</Copy> // Displaying error message if stock ticker is invalid

              : !state.data
                ? <Copy>Search stock by Ticker Symbol.</Copy>

                :  <Stocks 
                    name={state.data.symbol}
                    companyName={state.data.companyName}
                    price={state.data.iexAskPrice}
                    priceChange1={state.data.iexClose}
                    priceChange2={state.data.previousClose}
                    open={state.data.iexOpen}
                    high={state.data.iexRealtimePrice}
                    low={state.data.latestPrice}
                    mktCap={state.data.marketCap}
                    peRatio={state.data.peRatio} 
                    avgVolume={state.data.avgTotalVolume} 
                    prevClose={state.data.previousClose} 
                    wkHigh={state.data.week52High} 
                    wkLow={state.data.week52Low}
                  />            
        }
      </ContainerDiv>
    </div>
  );
}

export default App;

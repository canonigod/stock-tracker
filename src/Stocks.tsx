import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, TickerName, CompanyNameStyle, PriceStyle, ValueNegative, ValuePositive, ArrowNegative, ArrowPositive, DividerTop, DividerRight, DivTextLeft, DivTextRight,  SmallText, GrayText, OneThirdDiv } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

const numFormatter = (num: number) => { // Formatting number to display if it's thousands, millions, billions, etc...
    let si = [
      { value: 1, symbol: "" },
      { value: 1E3, symbol: "K" },
      { value: 1E6, symbol: "M" },
      { value: 1E9, symbol: "B" },
      { value: 1E12, symbol: "T" },
      { value: 1E15, symbol: "P" },
      { value: 1E18, symbol: "E" }
    ];
    let rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(2).replace(rx, "$1") + si[i].symbol;
  }

  interface StockProps { // Stock Props
    name: string, 
    companyName: string, 
    price: number, 
    priceChange1: number, 
    priceChange2: number, 
    open: number, 
    high: number, 
    low: number, 
    mktCap: number, 
    peRatio: number, 
    avgVolume: number, 
    prevClose: number, 
    wkHigh: number, 
    wkLow: number
  }

  const priceChangeFun = (num1: number, num2: number) => { 
      // Function to get the stock price change using today's close and yesterday's close amounts
    return (num1 - num2).toFixed(2)
  }

  const percentagePriceChange = ( num1: number, num2: number) => { 
      // Function to get the stock price change using today's close and yesterday's close amounts in percentage
      let priceChangeValue: any = priceChangeFun(num1, num2)
      let percentageValue = ((priceChangeValue / num2) * 100).toFixed(2)
      return percentageValue
  }

const Stocks = ({name, companyName, price, priceChange1, priceChange2, open, high, low, mktCap, peRatio, avgVolume, prevClose, wkHigh, wkLow, ...props}: StockProps) => {
    let priceChange = Number(priceChangeFun(priceChange1, priceChange2)) // Assigning the Price Change to a variable
    let priceChangePercentage = percentagePriceChange(priceChange1, priceChange2) // Assigning the Price Change Percentage to a variable

    return (
        <div>
            <Box className="container my-4">
                <div className="row">
                    <div className="col-md-6">
                        <TickerName>{name}</TickerName>
                        <CompanyNameStyle>{companyName}</CompanyNameStyle>
                    </div>
                    <div className="col-md-6">
                        <PriceStyle>{price}</PriceStyle>
                        {
                            Math.sign(priceChange) === -1
                            ? <ValueNegative>
                                {priceChange}
                                <span className="px-1">{'(' + priceChangePercentage +'%)'}</span>
                                <ArrowNegative><FontAwesomeIcon icon={faArrowDown}/></ArrowNegative>
                                </ValueNegative>

                            : <ValuePositive>
                            {'+' + priceChange}
                            <span className="px-1">{'(' + priceChangePercentage +'%)'}</span>
                            <ArrowPositive><FontAwesomeIcon icon={faArrowUp}/></ArrowPositive>
                            </ValuePositive>
                        }
                    </div>
                    <DividerTop></DividerTop>
                    <DividerRight className="row">
                        <DivTextLeft className="col-md-8">
                            <SmallText>Open</SmallText>
                            <SmallText>High</SmallText>
                            <SmallText>Low</SmallText>
                        </DivTextLeft>
                        <DivTextRight className="col-md-4">
                            <GrayText>{open}</GrayText>
                            <GrayText>{high}</GrayText>
                            <GrayText>{low}</GrayText>
                        </DivTextRight>                      
                    </DividerRight>
                    <DividerRight className="row">
                        <DivTextLeft className="col-md-8">
                            <SmallText>Mkt Cap</SmallText>
                            <SmallText>P/E Ratio</SmallText>
                            <SmallText>Avg. Volume</SmallText>
                        </DivTextLeft>
                        <DivTextRight className="col-md-4">
                            <GrayText>{numFormatter(mktCap)}</GrayText>
                            <GrayText>{peRatio}</GrayText>
                            <GrayText>{numFormatter(avgVolume)}</GrayText>
                        </DivTextRight>                      
                    </DividerRight>
                    <OneThirdDiv className="row">
                        <DivTextLeft className="col-md-8">
                            <SmallText>Prev Close</SmallText>
                            <SmallText>52-wk high</SmallText>
                            <SmallText>52-wk low</SmallText>
                        </DivTextLeft>
                        <DivTextRight className="col-md-4">
                            <GrayText>{prevClose}</GrayText>
                            <GrayText>{wkHigh}</GrayText>
                            <GrayText>{wkLow}</GrayText>
                        </DivTextRight>
                    </OneThirdDiv>
                </div>
            </Box>
        </div>
    )
}

export default Stocks;
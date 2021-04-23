import styled from 'styled-components';

/* Write all styled components here */
export const ContainerDiv = styled.div`
    width: 100%;
    position: absolute;
    top: 20%;
    text-align: center;
`;

export const Copy = styled.p`
    color: #bcb8b8;
    font-weight: 300;
    margin-top: 2rem;
`;

export const Box = styled.div`
    box-shadow: rgb(0,0,0,.2) 5px 5px 20px;
    border-radius: 15px;
    width: 42%;
    height: auto;

    @media (max-width: 1200px){
        width: 60%;
    } 
`
export const TickerName = styled.p`
    font-size: 2rem;
    text-align: left;
    padding: 1rem 1rem 0;
    font-weight: 700;
    margin: 0;

    @media (max-width: 767px){
        text-align: center;
    }
`;

export const CompanyNameStyle = styled.p`
    color: #999797;
    text-align: left;
    padding: 0 1rem 2rem;
    font-size: 1rem;
    margin:0;

    @media (max-width: 767px){
        padding: 0 1rem;
        text-align: center;
    }
`;

export const PriceStyle = styled.p`
    font-size: 2rem;
    text-align: right;
    padding: 1rem 1rem 0;
    font-weight: 700;
    margin: 0;

    @media (max-width: 767px){
        text-align: center;
    }
`

export const ValueNegative = styled.p`
    text-align: right;
    padding: 0 1rem 0;
    color: #EB5757;

    @media (max-width: 767px){
        padding: 0;
        font-size: 0.9rem;
        text-align: center;
    }
`

export const ValuePositive = styled.p`
    text-align: right;
    padding: 0 1rem 0;
    color: #27AE60;

    @media (max-width: 767px){
        padding: 0;
        font-size: 0.9rem;
        text-align: center;
    }

`
export const ArrowNegative = styled.span`
    color: red;
    font-size: 0.7rem;
`

export const ArrowPositive = styled.span`
    color: #27AE60;
    font-size: 0.7rem;
`

export const DividerTop = styled.div`
    border-bottom: 1px solid rgba(174,174,174,.2);
    width: 40.8%;
    position: absolute;
    top: 55%;
    left: 29.7%;

    @media (max-width: 767px){
        display: none;
    }

    @media (min-width: 767px){
        top: 55.5%;
    }

    @media (min-width: 767px) and (max-width:1200px){
        width: 55%;
        left: 22.7%;
    }
`

export const DividerRight = styled.div`
    border-right: 1px solid rgba(174,174,174,.2);
    height: 5rem;
    width: 33%;
    margin: 0;

    @media (max-width: 767px){
        height: 0;
    }
`
export const DivTextLeft = styled.div`
    text-align: left;
    @media (max-width: 991px){
        text-align: center;
        padding: 0 4px;
    }
`

export const DivTextRight = styled.div`
    text-align: right ;

    @media (max-width: 1200px){
        text-align: center;
        padding: 0;
    }
`
export const OneThirdDiv = styled.div`
    width: 33%;
    margin: 0
`

export const GrayText = styled.p`
    color: #888888;
    font-size: .7rem;
    
`

export const SmallText = styled.p`
    font-size: .7rem;

    @media (max-width: 767px){
        font-size: .6rem;
    }

    @media (max-width: 1200px){
        padding: 0rem !important;
    }
`

export const Button = styled.button`
background-color: #000;
color: #fff;
border-radius: 50px;
border: none;
min-width: 5%;
text-transform: uppercase;
font-size: 1rem;
padding: 10px 20px;
margin: 0 10px;
font-weight: 00;
:hover{
    background-color: #2e2e2e;
}
`;

export const InputField = styled.input`
border-radius: 50px;
border: 1px solid #bcb8b8;
padding: 10px 15px;
outline: none;
`;


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Button, Icon } from 'semantic-ui-react';
import '../../assets/scss/helpers.scss';
import { ReactComponent as BinanceLogo } from '../../assets/img/binance.svg';
import { ReactComponent as HuobiLogo } from '../../assets/img/huobi-logo.svg';
import ModalWindow from './ModalWindow';
import { getExchangeHuobi } from '../../actions/huobi';
import { getExchangeBinance } from '../../actions/binance';
import { setPairs } from '../../actions';


const responseBinance = [
    {
        "id": 1170083830,
        "price": "56947.00000000",
        "qty": "0.00050000",
        "quoteQty": "28.47350000",
        "time": 1638348450347,
        "isBuyerMaker": false,
        "isBestMatch": true
    },
    {
        "id": 1170083831,
        "price": "56947.38000000",
        "qty": "0.00438000",
        "quoteQty": "249.42952440",
        "time": 1638348450347,
        "isBuyerMaker": false,
        "isBestMatch": true
    },
    {
        "id": 1170083832,
        "price": "56950.00000000",
        "qty": "0.00059000",    //amount
        "quoteQty": "33.60050000",
        "time": 1638348450347,
        "isBuyerMaker": false, // SELL = true, Buy = false
        "isBestMatch": true
    },
];
//binance api cors policy does not allow calling endpoints with axios


const ResultsPage = (props, {children}) => {
    const dispatch = useDispatch();
    const binanceExchangePrice = useSelector(state => state.binance);
    const huobiExchangePrice = useSelector(state => state.huobi.price)
    const pair = useSelector(state => state.pair);
    const [sortByInc, setSortByInc] = useState(true);

    const term = props.match.params.cryptocurrency_pair;

    useEffect(() => {
        if(term) {
            dispatch(getExchangeBinance(term))
            let pair = term.split('-');
            dispatch(setPairs(pair))
            dispatch(getExchangeHuobi(term.replace('-', '').toLowerCase()))
        }
    }, [])

    useEffect(() => {
        comparePrice();
    }, [sortByInc, binanceExchangePrice.price, huobiExchangePrice])

    const binanceExchange = () => {
        return (
            <Grid.Row>
                <Grid.Column  verticalAlign="middle" className="exchange-convert">
                    <BinanceLogo width="130px" className="align-middle" />
                    <div className="exchange-convert-block">
                        {binanceExchangePrice.error ? <span> not support this exchange pair </span> :
                            <span>
                                <span> 1 {pair.from} = </span>
                                <ModalWindow
                                    name={`${binanceExchangePrice.price} ${pair.to}`}
                                    content={responseBinance}
                                    header='Historical Info'
                                    source='binance'>
                                    {children}
                                </ModalWindow>
                            </span>
                         }
                    </div>
                </Grid.Column>
            </Grid.Row>
        )
    }

    const huobiExchange = () => {
        return (
            <>
            <Grid.Row>
                <Grid.Column  verticalAlign="middle" className="exchange-convert">
                    <HuobiLogo width="130px" className="align-middle" />
                    <div className="exchange-convert-block">
                        {huobiExchangePrice ?
                            <span>
                                <span> 1 {pair.from} = </span>
                                <ModalWindow
                                    name={`${huobiExchangePrice} ${pair.to}`}
                                    pair={pair}
                                    header="Historical Info"
                                    source="huobi">
                                    {children}
                                </ModalWindow>
                            </span>
                            : <span> not support this exchange pair </span>}
                    </div>
                </Grid.Column>
            </Grid.Row>
            </>
        )
    }

    const comparePrice = () => {
        let binancePriceNumber = parseFloat(binanceExchangePrice.price);

        if(sortByInc){
            if(binancePriceNumber > huobiExchangePrice) {
                return [huobiExchange(), binanceExchange()]
            }
            else {
                return [binanceExchange(), huobiExchange()]
            }
        }
        else {
            if(binancePriceNumber > huobiExchangePrice) {
                return [binanceExchange(), huobiExchange()]
            }
            else {
                return [huobiExchange(), binanceExchange()]
            }
        }
    }
    
    return (
        <>
            <Button floated="right" icon labelPosition='right' onClick={() => setSortByInc(!sortByInc)} >
                {sortByInc ? 'Sort by High Price': 'Sort by Low Price'}
                <Icon name={`sort content ${sortByInc ? 'descending' : 'ascending'}`} />
            </Button>
            <Grid columns={1} divided='vertically' className="exchange-result-page">
                {comparePrice()}
            </Grid>
        </>
    )
}

export default ResultsPage;
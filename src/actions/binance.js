import binance from '../apis/binance';
import {
    GET_EXCHANGE_BINANCE,
    ERROR
} from './types'
import history from '../history';


export const getExchangeBinance = (term) => async dispatch => {
    history.push(`/${term}`);
    const response = await binance.get(`/api/v3/ticker/price?symbol=${term.replace('-', '')}`).then((response) => {
        dispatch({ type: GET_EXCHANGE_BINANCE, payload: response.data })
    })
    .catch((error) => {
        dispatch({ type: ERROR, payload: error.message });

    });
}

export const getHistoricalInfoBinance = (term) => async dispatch => {
    history.push(`/${term}`)
    const response = await binance.get(`/api/v3/historicalTrades?symbol=${term.replace('-', '')}`)
}

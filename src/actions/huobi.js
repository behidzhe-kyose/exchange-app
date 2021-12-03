import huobi from '../apis/huobi';
import {
    GET_EXCHANGE_HUOBI,
    GET_HISTORY_INFO_HUOBI,
} from './types';


export const getExchangeHuobi = (term) => async dispatch => {
    const response = await huobi.get(`/market/trade?symbol=${term}`)
    if(response.data.status === 'ok') {
        dispatch({ type: GET_EXCHANGE_HUOBI, payload: response.data.tick.data[0] })
    }
    else{
        dispatch({ type: GET_EXCHANGE_HUOBI, payload:'' })
    }
}

export const getHistoricalInfoHuobi = (term) => async dispatch => {
    const response = await huobi.get(`/market/history/trade?size=10&symbol=${term}`)
    dispatch({ type: GET_HISTORY_INFO_HUOBI, payload: response.data.data })
}
import { combineReducers } from 'redux';
import getExchangeBinance from './binance/getExchangeBinance';
import getExchangeHuobi from './huobi/getExchangeHuobi';
import getHistoricalInfoHuobi from './huobi/getHistoricalInfoHuobi';
import setPairsReducer from './setPairsReducer';

export default combineReducers({
    binance: getExchangeBinance,
    huobi: getExchangeHuobi,
    pair: setPairsReducer,
    huobi_history: getHistoricalInfoHuobi
})
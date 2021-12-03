import {
    GET_EXCHANGE_BINANCE,
    ERROR
} from '../../actions/types'

const getExchangeBinance = (state = {}, action) => {
    switch(action.type) {
        case GET_EXCHANGE_BINANCE:
            return {...action.payload}
        case ERROR:
            return {error: action.payload}
        default:
            return state
    }
}

export default getExchangeBinance
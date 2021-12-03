import { GET_EXCHANGE_HUOBI } from "../../actions/types"

const getExchangeHuobi = (state = '', action) => {
    switch(action.type) {
        case GET_EXCHANGE_HUOBI:
            return action.payload
        default:
            return state
    }
}

export default getExchangeHuobi
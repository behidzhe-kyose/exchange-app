import { GET_HISTORY_INFO_HUOBI } from "../../actions/types";

const getHistoricalInfoHuobi = (state = [], action) => {
    switch(action.type) {
        case GET_HISTORY_INFO_HUOBI:
            return action.payload
        default:
            return state;
    }
}

export default getHistoricalInfoHuobi;
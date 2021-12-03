import { SET_PAIRS } from "../actions/types";

const setPairsReducer = (state = {}, action) => {
    switch(action.type) {
        case SET_PAIRS:
            return { from: action.payload[0], to: action.payload[1]};
        default:
            return state;
    }
}

export default setPairsReducer;
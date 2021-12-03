import { SET_PAIRS} from './types'


export const setPairs = (pairs) => {
    return {
        type: SET_PAIRS,
        payload: pairs
    }
}

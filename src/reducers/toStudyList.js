/**
 * @since 2017-04-04 17:38
 * @author chenyiqin
 */

import * as actionType from '../constant/action-type'
import createReducer from '../util/createReducer'

const initialState = {
    fetching: false,
    options: [],
    tostudy: [],
}

export default createReducer(initialState, {
    [actionType.FETCHING_TODO_LIST]: (state, action) => {
        return {
            ...state,
            fetching: action.fetching,
        }
    },
    [actionType.GET_STUDY_LIST]: (state, action) => {
        return {
            ...state,
            tostudy: action.tostudy,
        }
    },
})

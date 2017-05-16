/**
 * Created by shiyunjie on 17/5/13.
 */
import * as actionType from '../constant/action-type'
import createReducer from '../util/createReducer'

const initialState = {
    items: [],
    fetching: false,
    selectDefaultValue: '',
    submitResult: 0,
    ModalMessage: '请求完成',
}

export default createReducer(initialState, {
    [actionType.GET_SELECT_LIST]: (state, action) => {
        return {
            ...state,
            items: action.items,
        }
    },
    [actionType.FETCHING_SELECT_LIST]: (state, action) => {
        return {
            ...state,
            fetching: action.fetching,
        }
    },
    [actionType.GET_SUBMIT_RESULT]: (state, action) => {
        return {
            ...state,
            submitResult: action.submit,
        }
    },
})

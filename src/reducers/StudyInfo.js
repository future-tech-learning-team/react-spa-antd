/**
 * @since 2017-04-04 17:38
 * @author chenyiqin
 */

import * as actionType from '../constant/action-type'
import createReducer from '../util/createReducer'


const initialState = {
    catalogType: '',
    studyDisKey: '',
    studyDisValue: '',
    studyDisTag: '',
    studyDisTwoLevelShow: '',
    remark: '',
    fetching: false,
}

export default createReducer(initialState, {
    [actionType.FETCHING_STUDYSUBDATA]: (state, action) => {
        return {
            ...state,
            fetching: action.fetching,
        }
    },
    [actionType.STUDY_SUB_DATA_COMPLETE]: (state, action) => {
        return {
            ...state,
            ...action,
        }
    },
    [actionType.STUDY_SUB_DATA_COMPLETE]: (state, action) => {
        return {
            ...state,
            ...action,
        }
    },
    [actionType.STUDYSUBDATA]: (state, action) => {
        return {
            ...state,
            ...action.formField,
        }
    },
})

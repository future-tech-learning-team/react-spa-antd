/**
 * Created by shiyunjie on 17/5/13.
 */

import * as actionType from '../constant/action-type'
import * as SelectApi from '../api/LearningTargetSelect'

export const fetchingSelectList = (fetching) => ({
    type: actionType.FETCHING_SELECT_LIST,
    fetching,
})

export const receiveSelectList = (items) => ({
    type: actionType.GET_SELECT_LIST,
    items,
})

export const getSelectList = () => {
    return async (dispatch) => {
        dispatch(fetchingSelectList(true))
        try {
            const json = await SelectApi.getSelectList()

            dispatch(receiveSelectList(json))
        } catch (ex) {
            console.log(`ex = `, ex)    // eslint-disable-line
        } finally {
            dispatch(fetchingSelectList(false))
        }
    }
}

export const LearningSubmit = (e) => {
    return async (dispatch) => {
        dispatch(fetchingSelectList(true))
        try {
            const json = await SelectApi.learningSubmit(e)

            console.log(`json = `, json)    // eslint-disable-line
            dispatch(receiveSubmit(json.ret))
        } catch (ex) {
            console.log(`ex = `, ex)    // eslint-disable-line
        } finally {
            dispatch(fetchingSelectList(false))
        }
    }
}

export const receiveSubmit = (submit) => ({
    type: actionType.GET_SUBMIT_RESULT,
    submit,
})


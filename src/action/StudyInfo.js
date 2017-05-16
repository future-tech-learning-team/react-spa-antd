/**
 * @fileoverview action todo
 * @since 2017-04-04 16:51
 * @author chenyiqin
 */

import * as actionType from '../constant/action-type'
import * as todoApi from '../api/StudyInfo'

export const fetchingTodoList = (fetching) => ({
    type: actionType.FETCHING_STUDYSUBDATA,
    fetching,
})


// const catalogType = document.getElementById("catalogType").value
// const studyDisKey = document.getElementById("studyDisKey").value
// const studyDisValue = document.getElementById("studyDisValue").value
// const studyDisTag = document.getElementById("studyDisTag").value
// const studyDisTwoLevelShow = document.getElementById("studyDisTwoLevelShow").value
// const remark = document.getElementById("remark").value

export const studySubDataComplete = (value) => ({
    type: actionType.STUDY_SUB_DATA_COMPLETE,
    ...value,
})

export const studySubData = (value) => {
    return async (dispatch) => {
        dispatch(fetchingTodoList(true))
        try {
            const json = await todoApi.goStudySubData(value)

            dispatch(studySubDataComplete(json))
        } catch (ex) {
            console.log(`ex = `, ex)    // eslint-disable-line
        } finally {
            dispatch(fetchingTodoList(false))
        }
    }
}


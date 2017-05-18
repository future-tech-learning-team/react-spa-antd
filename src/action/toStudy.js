/**
 * @fileoverview action todo
 * @since 2017-04-04 16:51
 * @author chenyiqin
 */

import * as actionType from '../constant/action-type'
import * as sudyApi from '../api/studyTest'

export const fetchingTodoList = (fetching) => ({ // loading加载
    type: actionType.FETCHING_TODO_LIST,
    fetching,
})

export const receiveStudyList = (tostudy) => ({ // 下拉数据
    type: actionType.GET_STUDY_LIST,  // 在文件夹constant下面定义type变量
    tostudy, // ** tostudy 和 reducer 文件夹中的 initialState 中的属性保持一致
})

export const getStudyList = () => { // 页面加载调用此函数
    return async (dispatch) => {
        dispatch(fetchingTodoList(true))  // loading加载显示
        try {
            const json = await sudyApi.getStudyJsonList() // 获取数据

            dispatch(receiveStudyList(json)) // 派发下拉数据
        } catch (ex) {
            console.log(`ex = `, ex)    // eslint-disable-line
        } finally {
            dispatch(fetchingTodoList(false)) // loading隐藏
        }
    }
}


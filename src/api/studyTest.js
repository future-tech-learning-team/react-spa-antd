/**
 * @fileoverview todo server api
 * @since 2017-04-04 11:51
 * @author chenyiqin
 */

import * as server from '../constant/server'
import fetch from '../util/fetch'
// GET_STUDY_LIST_METHOD 对应 study.js  RegExp 匹配
export const getStudyJsonList = async (data) => {
    const result = await fetch({
        url: `${server.SERVER_PATH}/${server.GET_STUDY_LIST_METHOD}`,
        data,
    })

    return result
}

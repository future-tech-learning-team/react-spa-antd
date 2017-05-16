/**
 * @fileoverview todo server api
 * @since 2017-04-04 11:51
 * @author chenyiqin
 */

import * as server from '../constant/server'
import fetch from '../util/fetch'

export const goStudySubData = async (data) => {
    const result = await fetch({
        url: `${server.SERVER_PATH}/${server.GO_STUDY_SUB_DATA}`,
        data,
    })

    return result
}

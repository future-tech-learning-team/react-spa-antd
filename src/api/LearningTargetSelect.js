/**
 * Created by shiyunjie on 17/5/13.
 */

import * as server from '../constant/server'
import fetch from '../util/fetch'

export const getSelectList = async (data) => {
    const result = await fetch({
        url: `${server.SERVER_PATH}/${server.GET_SELECT_LIST_METHOD}`,
        data,
    })

    return result
}

export const learningSubmit = async (data) => {
    const result = await fetch({
        url: `${server.SERVER_PATH}/${server.GET_SUBMIT_METHOD}`,
        data,
    })

    console.log(`learningSubmit:`, result) // eslint-disable-line

    return result
}

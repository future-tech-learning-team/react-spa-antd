/**
 * @since 2017-04-18 17:58
 * @author chenyiqin
 */

import * as server from '../src/constant/server'
import fetchMock from 'fetch-mock'
import goStudySubData from './json/goStudySubData.json'

export const getTodosMock = fetchMock.mock(new RegExp(`/${server.GO_STUDY_SUB_DATA}`), (url, opts) => {
    console.log(`fetchMock url, opts = `, url, opts)    // eslint-disable-line

    return new Promise((resolve,) => {
        const result = goStudySubData

        resolve(JSON.stringify(result))
    })
})

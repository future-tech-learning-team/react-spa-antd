/**
 * @since 2017-04-18 17:58
 * @author chenyiqin
 */

import * as server from '../src/constant/server'
import fetchMock from 'fetch-mock'
import getStudyListJson from './json/getStudyList.json'

export const getstudyMock = fetchMock.mock(new RegExp(`/${server.GET_STUDY_LIST_METHOD}`), (url, opts) => {  // GET_STUDY_LIST_METHOD 在文件夹constant下面定义常量
    console.log(`studyfetchMock url, opts = `, url, opts)    // eslint-disable-line

    return new Promise((resolve,) => {
        const result = getStudyListJson

        resolve(JSON.stringify(result))
    })
})

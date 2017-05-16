/**
 * Created by shiyunjie on 17/5/13.
 */
import * as server from '../src/constant/server'
import fetchMock from 'fetch-mock'
import getSelectListJson from './json/getSelectList.json'
import getSubmitJson from './json/getSubmit.json'

export const getLearningsMock = fetchMock.mock(new RegExp(`/${server.GET_SELECT_LIST_METHOD}`), (url, opts) => {
    console.log(`fetchMock url, opts = `, url, opts)    // eslint-disable-line

    return new Promise((resolve,) => {
        const result = getSelectListJson

        resolve(JSON.stringify(result))
    })
})

export const getLearningSubmitsMock = fetchMock.mock(new RegExp(`/${server.GET_SUBMIT_METHOD}`), (url, opts) => {
    console.log(`fetchMock getLearningSubmitsMock, opts = `, url, opts)    // eslint-disable-line

    return new Promise((resolve,) => {
        const result = getSubmitJson

        resolve(JSON.stringify(result))
    })
})

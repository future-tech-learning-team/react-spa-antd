/**
 * @since 2017-04-20 11:30
 * @author chenyiqin
 */

import React from 'react'
import StudyListContainer from '../StudyListContainer' // 3

const setRef = (component) => {
    if (component !== null) {
        console.log(`component.getWrappedInstance() = `, component.getWrappedInstance())    // eslint-disable-line
    }
}

const StudyListRouteContainer = (props) => {
    const {
        router,
    } = props

    return (
        <StudyListContainer ref={setRef} router={router}/> // 3
    )
}

export default StudyListRouteContainer

/**
 * Created by shiyunjie on 17/5/13.
 */
/**
 * @since 2017-04-20 11:40
 * @author chenyiqin
 */

import React from 'react'
import LearningTargetContainer from '../LearningTargetContainer'

const LearningTargetRouteContainer = (props) => {
    const {
        router,
    } = props

    return (
        <LearningTargetContainer router={router}/>
    )
}

export default LearningTargetRouteContainer

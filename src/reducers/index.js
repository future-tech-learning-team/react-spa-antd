/**
 * @since 2017-04-04 17:38
 * @author chenyiqin
 */

import {routerReducer,} from 'react-router-redux'
import todo from './todo'
import todoList from './todoList'
import LearningTargetState from './LearningTarget'

export default {
    todo,
    todoList,
    LearningTargetState,
    routing: routerReducer,
}

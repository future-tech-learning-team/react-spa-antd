/**
 * @since 2017-04-04 18:53
 * @author chenyiqin
 */


import BaseRouteContainer from '../container/router/BaseRoute'
import NoMatchContainer from '../container/common/NoMatchContainer'
import TodoInfoRouteContainer from '../container/router/TodoInfoRoute'
import TodoListRouteContainer from '../container/router/TodoListRoute'

import StudyListRouteContainer from '../container/router/studyListRoute' // 2
const noMatchRoute = {
    path: '*',
    component: NoMatchContainer,
}
const TodoListRoute = {
    path: 'todo-list',
    component: TodoListRouteContainer,
}
const TodoInfoRoute = {
    path: 'todo(/:id)',
    component: TodoInfoRouteContainer,
}

const route = {
    path: '/',
    component: BaseRouteContainer,
    indexRoute: {
        // component: TodoListRouteContainer,
        component: StudyListRouteContainer,   //   1
    },
    childRoutes: [
        TodoListRoute,
        TodoInfoRoute,
        noMatchRoute,
    ],
}

export default route

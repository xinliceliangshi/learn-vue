import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [{
            path: '/redirect/:path(.*)',
            component: () =>
                import ('@/views/redirect/index')
        }]
    },
    {
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    },
    {
        path: '/auth-redirect',
        component: () =>
            import ('@/views/login/auth-redirect'),
        hidden: true
    },
    {
        path: '/404',
        component: () =>
            import ('@/views/error-page/404'),
        hidden: true
    },
    {
        path: '/401',
        component: () =>
            import ('@/views/error-page/401'),
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            component: () =>
                import ('@/views/dashboard/index'),
            name: 'Dashboard',
            meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
        }]
    },

]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [



    /** when your routing map is too long, you can split it into small modules **/
    // componentsRouter,
    // chartsRouter,
    // nestedRouter,
    // tableRouter,

    {
        path: '/article',
        component: Layout,
        redirect: '/article/list',
        name: 'Article',
        meta: {
            title: '新闻咨询',
            icon: 'el-icon-s-help'
        },
        children: [{
                path: 'create',
                component: () =>
                    import ('@/views/article/create'),
                name: 'CreateArticle',
                meta: { title: '新增', icon: 'edit' },
                hidden: true
            },
            {
                path: 'edit/:id(\\d+)',
                component: () =>
                    import ('@/views/article/edit'),
                name: 'EditArticle',
                meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
                hidden: true
            },
            {
                path: 'list',
                component: () =>
                    import ('@/views/article/list'),
                name: 'ArticleList',
                meta: { title: '新闻列表', icon: 'list' }
            }
        ]
    },
    {
        path: '/tab',
        component: Layout,
        redirect: '/tab/in',
        name: 'tab',
        meta: {
            title: '账单咨询',
            icon: 'el-icon-s-help'
        },
        children: [{
                path: 'in',
                component: () =>
                    import ('@/views/tab/in'),
                name: 'in',
                meta: { title: '账单', icon: 'tab' }
            },

            {
                path: 'create',
                component: () =>
                    import ('@/views/tab/create'),
                name: 'CreateArticle',
                meta: { title: '新增', icon: 'edit' },
                hidden: true

            },
            {
                path: 'edit/:id(\\d+)',
                component: () =>
                    import ('@/views/tab/edit'),
                name: 'EditArticle',
                meta: { title: 'Edit Article', noCache: true, activeMenu: '/tab/in' },
                hidden: true
            },

        ]
    },
    {
        path: '/medicine',
        component: Layout,
        redirect: '/medicine/fenci',
        name: 'medicine',
        meta: {
            title: '药品清单',
            icon: 'el-icon-s-help'
        },
        children: [{
<<<<<<< HEAD
                path: 'fenci',
                component: () =>
                    import ('@/views/medicine/fenci'),
                name: 'fenci',
                meta: { title: '分词详情', icon: 'tab' }
            },
            {
                path: 'news',
                component: () =>
                    import ('@/views/medicine/news'),
                name: 'news',
                //    meta: { title: '资讯详情', icon: 'list' }
            }
=======
          path: 'fenci',
          component: () =>
            import ('@/views/medicine/fenci'),
          name: 'fenci',
          meta: { title: '分词详情', icon: 'tab' }
        },
       {
          path: 'news',
          component: () =>
            import ('@/views/medicine/news'),
          name: 'news',
      //    meta: { title: '资讯详情', icon: 'list' }
        }
>>>>>>> 4f0879b90b74f9854225f3d1a95fc1df49859d8d
        ]
    },

    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
<<<<<<< HEAD
    mode: 'history', // require service support
=======
     mode: 'history', // require service support
>>>>>>> 4f0879b90b74f9854225f3d1a95fc1df49859d8d
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
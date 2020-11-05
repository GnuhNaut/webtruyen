import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: './about',
            name: 'about',
            component: () =>
                import ('./components/views/About.vue')
        },
        {
            path: '/category',
            name: 'category',
            component: () =>
                import ('./components/category/CategoryView.vue')
        },
        {
            path: '/kiemhiep',
            name: 'kiemhiep',
            component: () =>
                import ('./components/category/KiemHiep.vue')
        },
        {
            path: './lichsu',
            name: 'lichsu',
            component: () =>
                import ('./components/category/LichSu.vue')
        },
        {
            path: '/ngontinh',
            name: 'ngontinh',
            component: () =>
                import ('./components/category/NgonTinh.vue')
        },
        {
            path: '/tienhiep',
            name: 'tienhiep',
            component: () =>
                import ('./components/category/TienHiep.vue')
        },
        {
            path: '/truyenma',
            name: 'truyenma',
            component: () =>
                import ('./components/category/TruyenMa.vue')
        },
        {
            path: '/truyenteen',
            name: 'truyenteen',
            component: () =>
                import ('./components/category/TruyenTeen.vue')
        },
        {
            path: '/truyenvip',
            name: 'truyenvip',
            component: () =>
                import ('./components/select/TruyenVip.vue')
        },
        {
            path: '/truyenmoicapnhat',
            name: 'truyenmoicapnhat',
            component: () =>
                import ('./components/select/TruyenMoiCapNhat.vue')
        },
        {
            path: '/truyenyeuthich',
            name: 'truyenyeuthich',
            component: () =>
                import ('./components/select/TruyenYeuThich.vue')
        },
        {
            path: '/truyendecu',
            name: 'truyendecu',
            component: () =>
                import ('./components/select/TruyenDeCu.vue')
        },
        {
            path: '/truyenxemnhieu',
            name: 'truyenxemnhieu',
            component: () =>
                import ('./components/select/TruyenXemNhieu.vue')
        },
        {
            path: '/truyenfull',
            name: 'truyenfull',
            component: () =>
                import ('./components/select/TruyenFull.vue')
        },
        {
            path: '/feedback',
            name: 'feedback',
            component: () =>
                import ('./components/feedback/AboutFeedBack.vue')
        },
        {
            path: '/news',
            name: 'news',
            component: () =>
                import ('./components/news/AboutNews.vue')
        },
        {
            path: '/truyen',
            name: 'truyen',
            component: () =>
                import ('./components/story/truyen.vue')
        },
        {
            path: '/doctruyen',
            name: 'doctruyen',
            component: () =>
                import ('./components/readthestory/DocTruyen.vue')
        }
    ]
})
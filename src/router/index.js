import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Search from 'components/search/search'
import Singer from 'components/singer/singer'
import SingerDetail from 'components/singer-detail/singer-detail'
import Rank from 'components/rank/rank'
import Disc from 'components/disc/disc'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/recommend'
  }, {
    path: '/recommend',
    name: 'recommend',
    component: Recommend,
    children: [{
      path: ':id',
      component: Disc
    }]
  }, {
    path: '/search',
    name: 'search',
    component: Search
  }, {
    path: '/singer',
    name: 'singer',
    component: Singer,
    children: [{
      path: ':id',
      component: SingerDetail
    }]
  }, {
    path: '/rank',
    name: 'rank',
    component: Rank
  }]
})

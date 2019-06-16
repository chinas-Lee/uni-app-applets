import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as getters from './getter'
import mutations from './mutation'
import actions from './action'
import createLogger from 'vuex/dist/logger' // 修改日志

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    strict: debug,
    plugins: debug ? [createLogger()] : [] // 开发环境下显示vuex的状态修改
})
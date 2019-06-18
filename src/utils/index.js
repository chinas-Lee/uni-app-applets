import Utils from './utils.js'
import Config from './config.js'
import InterfaceList from './../service/interface-list.js'

export default {
    install (Vue) {
        let VuePrototype = Vue.prototype
        // 工具函数
        VuePrototype.$utils = Utils
        // 配置公共信息
        VuePrototype.$config = Config
		// 接口列表
		VuePrototype.$asyncAjax = InterfaceList
    }
}
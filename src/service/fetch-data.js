/**
 * Created by LCQ on 2019-06-04,0004.
 */
/*
* Promise请求接口方法
* */
import Vue from 'vue'
import BaseURL from './ip-config'
import { _getSign } from './../assets/js/user-methods.js'

const VuePrototype = Vue.prototype

/*
 * 异步请求
 * api - 接口名称
 * bodyParams - 参数体
 * headParams - URL后参数
 * method - 请求类型
 * systemData - 系统数据
 * isNoLogin - 是否需要登录
 * */
export function fetchData (api = '', bodyParams = {}, headParams = '', method = 'GET', header = {'content-type': 'application/json'}) {
    return new Promise((resolve, reject) => {
		let url = BaseURL.basicApi + headParams
		let data = JSON.stringify(_getSign(api, bodyParams) || '')
		let config = {
		   url,
		   data,
		   header
	   }
	   uni.request(config).then(data => {
		   let [error, res] = data
		   let result = res.data
		   if (!result || VuePrototype._tools._isNullObj(result)) {
		       reject(VuePrototype.$config.reqErrorMsg)
		   }
		   switch (+result.code) {
		       case 0:
		           resolve(result.data)
		           break
		       case -1:
		           reject(result.msg || VuePrototype.$config.reqErrorMsg)
		           break
		       case -2:
		           break
		       default:
		           reject(result.msg || VuePrototype.$config.reqErrorMsg)
		   }
	   })
    })
}

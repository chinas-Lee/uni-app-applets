/**
 * Created by LCQ on 2019-06-04,0004.
 */
/*
* 接口列表
* */
import { fetchData } from './fetch-data'

const Method = {
	get: 'GET',
	post: 'POST',
	put: 'PUT',
	del: 'DELETE',
	connect: 'CONNECT',
	head: 'HEAD',
	options: 'OPTIONS',
	trace: 'TRACE'
}


const interfaceList = {
    // 获取当前医院
    getMyHospital (bodyParams = {}, headParams = '') {
        return fetchData(`crm.common.hospital`, bodyParams, headParams, Method.post)
    },
    // 获取系统配置
    getSystemConfig (bodyParams = {}, headParams = '') {
        return fetchData(`crm.common.sysConf`, bodyParams, headParams, Method.post)
    }
}

export default interfaceList
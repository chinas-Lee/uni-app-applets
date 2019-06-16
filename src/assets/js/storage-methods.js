/**
 * 缓存操作方法
*/

/**
 * 存储指定Storage
 */
const _setStorage = function (name, content) {
  if (!name) return false
  try {
		uni.setStorageSync(name, content)
		return true
	} catch (e) {
		console.log(e)
		return false
	}
}

/**
 * 获取指定Storage
 */
const _getStorage = function (name) {
  if (!name) return false
  return uni.getStorageSync(name) || ''
}

/**
 * 获取Storage的信息
 */
const _getStorageInfo = function () {
  return uni.getStorageInfoSync()
}

/**
 * 移除指定Storage的信息
 */
const _removeStorage = function (name) {
  if (!name) return false
	try {
		uni.removeStorageSync(name)
		return true
	} catch (e) {
		return false
	}
}
/**
 * 清除所有Storage
 */
const _clearStorage = function () {
  try { 
  	uni.clearStorageSync()
		return true
  } catch (e) {
  	return false
  }
}


export {
  _setStorage,
  _getStorage,
	_getStorageInfo,
	_removeStorage,
	_clearStorage
}

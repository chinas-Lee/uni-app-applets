import * as types from './mutation-type'
const mutation = {
    [types.SET_LOGIN_STATUS] (state, val) {
        console.log(val)
        state.loginStatus = val
    }
}

export default mutation
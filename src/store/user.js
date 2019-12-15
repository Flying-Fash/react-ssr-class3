import axios from 'axios';
const USER_INFO = 'INDEX/USER_INFO';

const changeUserInfo = data => ({
    type:USER_INFO,
    data
})

export const getUserInfo = server => {
    return (dispatch,getState,axiosInstance) => {
        return axios.get("http://localhost:8080/api/user/info")
        .then(res =>{
            const {data} = res.data;
            dispatch(changeUserInfo(data));
        })
    }
} 

const defaultState = {
    userInfo:{}
}

export default (state=defaultState,action) => {
    switch(action.type){
        case USER_INFO:
            const newState = {
                ...state,
                userInfo:action.data,
            }
            return newState;

        default:
            return state;
    }
}
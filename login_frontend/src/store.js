import { createStore } from "vuex";
import axios from 'axios';
import router from "./route";


export default createStore({
    state(){
        return{
            isLoggedIn:false,
            huaMian:'login',
            user:null
        }
    },
    mutations:{
        //转化为登录状态
        LOGIN_STATE(state,status){
            state.isLoggedIn= status;
        },
        //转换为注册画面
        HUAMIAN_SIGNUP(state,component){
            state.huaMian=component
        },
        //用户注册
        SET_USER(state,user){
            state.user= user
        },

    },
    actions:{//登录
        async login({commit},credentials){
            try{
            const response = await axios.post('http://localhost:8000/api/login/',credentials);
            console.log('response',response)
            if (response.status === 200){
                commit('LOGIN_STATE',true);
            }}catch(error){
                console.error('login flase');
                commit('LOGIN_STATE',false)
            }
        },//画面转换
        huamianchange({commit},view){
            commit('HUAMIAN_SIGNUP',view)
        },
        //注册系统
        async signup({commit},credentials){
            try{
                let response = await axios.post('http://localhost:8000/api/signup/',credentials);
                commit ('SET_USER',response.data);
                router.push({name:'login'})
            }catch(error){
                console.error('SIGNUP flase');
            }
        },
    }
});
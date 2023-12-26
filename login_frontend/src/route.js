import { createRouter, createWebHistory } from 'vue-router';

import UserSignup from './components/UserSignup.vue';
import Loginpage from './components/LoginPage.vue';



const routes=[
   {
     path:'/login',
     name:'login',
     component:Loginpage,
   },{
      path:'/signup',
      name:'signup',
      component:UserSignup,
    }
]

const router = createRouter({
  history: createWebHistory(),
   routes
});

export default router;
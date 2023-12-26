<template>
  <el-input v-model="username" placeholder="Please input" />
  <el-input
    v-model="password"
    type="password"
    placeholder="Please input password"
    show-password
  />
  <button @click="alogin()" >
        click
  </button>
  <button @click="huamianchange('signup')" >
        signup
        <router-link to="/signup"></router-link>
  </button>

</template>

<script>
import {mapActions} from 'vuex';
export default{
  data(){
    return{username: '',
          password:''
    };
  },
  /* 这里面API后面要在后端写一下*/
  methods: {
    ...mapActions(['login']),
    ...mapActions(['huamianchange']),

    
    async alogin() {
      console.log('Login data:', { username: this.username, password: this.password });
      
        await this.$store.dispatch('login',{
          username: this.username,
          password: this.password,
        })
       .catch ((error)=>{
        console.error('Login error1', error);
      });
    }
  }
}
</script>



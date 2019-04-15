<template>
  <div>
    <h1>login</h1>
    <div>
      <p>所有权限: username:admin  password:123456</p>
      <p>部分权限: username:bdmin  password:123456</p>
    </div>
    <hr/>
    <p>
      username: <input type="text" v-model="username">
    </p>
    <p>
      password: <input type="text" v-model="password">
    </p>
    <button @click="login">login</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username:'',
      password:''
    }
  },
  methods:{
    login(){
      let data = {
        username:this.username,
        password:this.password
      }
      this.$store.dispatch('login',JSON.stringify(data)).then(res => {
        this.$router.push({path:'/'})
        console.log(this.$router.options)
      })
    }
  }
}
</script>


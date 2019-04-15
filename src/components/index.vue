<template>
  <div>
        <header class="app-header">
        <p>vuex+vueRouter实现权限管理</p>
        <p @click="logout">退出</p>
    </header>
    <section class="app-layout">
        <ul>
          <li v-for="item in routers" :key="item.id">
            <p v-for="item2 in item.children" :key="item2.id">
                          <router-link :to="item2.path">{{item2.name}}</router-link>
            </p>
          </li>
        </ul>
        <main class="app-main">
            index
            <router-view/>
        </main>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
    computed:{
    routers(){
      return this.$store.state.routers
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('logout').then(() => {
        this.$router.push({path:'/login'})
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted(){
    console.log(this.$route.router)
  }
}
</script>
<style lang="">
    .app-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
  }
  .app-layout ul{
    position: fixed;
    left: 0;
    top: 50px;
    bottom: 0;
    left: 0;
    width: 200px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }
  .app-main{
    margin-left: 200px;
  }
</style>

<template>
  <div class="container">
    <Search/>
    <ListUser/>
  </div>
</template>
<script>
  import Search from './components/Search.vue'
  import ListUser from './components/ListUser.vue'
    export default {
      components:{
        Search,
        ListUser
      },
        data() {
            return {

            }
        }
    }
</script>
<style></style>

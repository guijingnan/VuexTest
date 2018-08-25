<template>
  <div>
    <h1 v-show="firstView">输入用户名搜索</h1>
    <h1 v-show="loading">Loadings...</h1>
    <h1 v-show="errorMsg">{{errorMsg}}</h1>
    <div class="row">
      <div class="card " v-for="(user,index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.header_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.username}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
    export default {
      computed:{
        ...mapState(['firstView','loading','users','errorMsg'])
      }
    }
</script>
<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>

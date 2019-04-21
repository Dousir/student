<template>
  <header class="header">
    <div class="contentBox cfff">
      <div class="logo">
        <img src="@/assets/images/logo.png">
      </div>
      <div class="navBox">
        <div class="seachBox">
          <input type="text" class="seachInput" placeholder="seach" v-model="seachval">
          <img class="seachImg"  src="@/assets/images/seachImg.png">
        </div>
        <ul class="navUl">
          <li v-for="(item,key) in navlist" :key="key">
            <router-link :to="item.urllinks">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import "../assets/css/header.less";
const navlist = [
  {urllinks:'/',name:'Home'},
  {urllinks:'/yiwei',name:'Wei Yi'},
  {urllinks:'/',name:'Members'},
  {urllinks:'/',name:'Research'},
  {urllinks:'/',name:'Publications'},
  {urllinks:'/',name:'Opportunities'},
  {urllinks:'/',name:'Photos'},
  {urllinks:'/news',name:'New'},
];
export default {
  name: "",
  props: {
    msg: String
  },
  data() {
    return{
       seachval:'',
       navlist:navlist
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

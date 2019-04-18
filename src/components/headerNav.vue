<template>
  <header class="header">
    <div class="contentBox cfff">
      <ul class="navUl">
        <li>
          <router-link to='/'>Home</router-link>
        </li>
        <li>
          <router-link to='/news'>news</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import "../assets/css/header.css";
export default {
  name: "",
  props: {
    msg: String
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

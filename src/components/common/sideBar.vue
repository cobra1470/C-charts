<template>
    <div class="side-bar">
        side bar
    </div>
</template>

<script>
export default {
  name: 'sideBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
  em{
    color: red;
  }
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

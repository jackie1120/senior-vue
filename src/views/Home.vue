<template>
  <div class="container">
    <h1>Vue文档精粹</h1>
    <ul>
      <li><router-link to="/examples/1">Computed Caching vs Methods</router-link></li>
      <li><router-link to="/examples/2">Computed vs Watched Property</router-link></li>
      <li><router-link to="/examples/3">Watcher's immediate option</router-link></li>
      <li><router-link to="/examples/4">Automatic Global Registration of Base Components</router-link></li>
      <li><router-link to="/examples/5">v-model with components</router-link></li>
      <li><router-link to="/examples/6">Customizing Component v-model</router-link></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>
div.container {
  width: 960px;
  margin: 0 auto;
}
li {
  list-style: none;
  line-height: 25px;
  a {
    color: #2c3e50;
    &:hover {
      color: #42b983
    }
  }
}
</style>

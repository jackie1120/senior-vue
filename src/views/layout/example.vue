<template>
  <div>
    <div class="nav" @click="$router.push({path: '/'})">返回</div>
    <main><router-view /></main>
  </div>
</template>

<script>

</script>
<style lang="scss" scoped>
.nav {
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  background-color: #42b983;
  color: white;
  cursor: pointer;
  text-decoration: underline;
}
main {
  width: 960px;
  margin: 0 auto;
}
</style>

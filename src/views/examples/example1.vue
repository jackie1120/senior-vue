<template>
  <div>
    <h1>Computed Caching vs Methods</h1>
    <div class="block">
      <button @click="changeValue()">Change value</button>
    </div>
    <div class="block">
      <h2>Computed value</h2>
      <ul>
        <li><label>Computed value</label>:{{ computedValue }}</li>
        <li><label>Computed value</label>:{{ computedValue }}</li>
        <li><label>Computed value</label>:{{ computedValue }}</li>
      </ul>
    </div>
    <div class="block">
      <h2>Method's value</h2>
      <ul>
        <li><label>Method's value</label>:{{ methodValue() }}</li>
        <li><label>Method's value</label>:{{ methodValue() }}</li>
        <li><label>Method's value</label>:{{ methodValue() }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 1
    }
  },
  computed: {
    computedValue () {
      console.log('computed emitted')
      return this.value + 1
    }
  },
  methods: {
    changeValue () {
      this.value = 2
    },
    methodValue () {
      console.log('method emitted')
      return this.value + 1
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: #42b983;
}
</style>

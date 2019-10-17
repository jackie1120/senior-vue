<template>
  <div>
    <h1>watch's immediate option</h1>
    <div class="block">
      <button @click="changeValue()">Change value</button>
    </div>
    <div class="block">
      <h2>Watched Property</h2>
      <ul>
        <li><label>Watched Property</label>:{{ this.fullName }}</li>
        <li><label>Watched Property</label>:{{ this.fullName }}</li>
        <li><label>Watched Property</label>:{{ this.fullName }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: ''
    }
  },
  methods: {
    changeValue () {
      this.firstName = 'Jackie'
    }
  },
  watch: {
    firstName: {
      immediate: true,
      handler: function (val) {
        console.log('watch emitted')
        this.fullName = val + ' ' + this.lastName
      }
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: #42b983;
}
</style>

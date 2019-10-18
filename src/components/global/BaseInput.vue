<template>
  <div>
    <label>{{ label }}</label><input type="text" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    label: {
      type: String
    },
    placeholder: {
      type: String,
      default: 'Please input'
    }
  }
}
</script>

<template>
  <div>
    <h1>v-model with components</h1>
    <div class="block">
      <h2>Using v-model on Components,the value is: {{value}}</h2>
      <div>
        <custom-checkbox
          v-model="value"
        ></custom-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
import CustomCheckbox from '@/components/CustomCheckbox'
export default {
  data () {
    return {
      value: true
    }
  },
  components: {
    CustomCheckbox
  }
}
</script>

<template>
  <div>
    <h1>v-model with components</h1>
    <div class="block">
      <h2>v-model on input element,the value is: {{searchText}}</h2>
      <div>
        <input v-model="searchText">
      </div>
    </div>
    <div class="block">
      <h2>input element,the value is: {{searchText2}}</h2>
      <div>
        <input :value="searchText2" @input="searchText2 = $event.target.value">
      </div>
    </div>
    <div class="block">
      <h2>Using value binding on Components,the value is: {{searchText3}}</h2>
      <div>
        <custom-input
          :value="searchText3"
          @input="searchText3 = $event"
        ></custom-input>
      </div>
    </div>
    <div class="block">
      <h2>Using v-model on Components,the value is: {{searchText4}}</h2>
      <div>
        <custom-input
          v-model="searchText4"
        ></custom-input>
      </div>
    </div>
  </div>
</template>

<script>
import CustomInput from '@/components/CustomInput'
export default {
  data () {
    return {
      searchText: '',
      searchText2: '',
      searchText3: '',
      searchText4: ''
    }
  },
  components: {
    CustomInput
  }
}
</script>

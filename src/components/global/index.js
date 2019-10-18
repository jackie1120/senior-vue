import Vue from 'vue'
import { upperFirst, camelCase } from 'lodash'

const requireComponent = require.context(
  './',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})

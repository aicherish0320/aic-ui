import Button from './button'
import Icon from './icon'

const components = [Button, Icon]

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof window.Vue !== 'undefined') {
  install(window.Vue)
}

export default {
  install
}

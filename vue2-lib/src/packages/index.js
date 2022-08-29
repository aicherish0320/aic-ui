import Button from './button'
import Icon from './icon'
import ButtonGroup from './button/src/ButtonGroup.vue'
import Row from './layout/Row.vue'
import Col from './layout/Col.vue'

const components = [Button, ButtonGroup, Icon, Row, Col]

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

import Button from './button'
import Icon from './icon'
import ButtonGroup from './button/src/ButtonGroup.vue'
import Row from './layout/Row.vue'
import Col from './layout/Col.vue'
import Container from './container/Container.vue'
import Main from './container/Main.vue'
import Header from './container/Header.vue'
import Aside from './container/Aside.vue'
import Footer from './container/Footer.vue'
import AcInput from './input'

const components = [
  Button,
  ButtonGroup,
  Icon,
  Row,
  Col,
  Container,
  Main,
  Header,
  Aside,
  Footer,
  AcInput
]

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

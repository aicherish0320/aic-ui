import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

import Button from '@/packages/button'
import Icon from '@/packages/icon'

describe('Button.vue', () => {
  it('1. 测试 button 能够正常显示 slot 里的内容', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'default button'
      }
    })
    expect(wrapper.text()).to.eq('default button')
  })
  it('2. 测试 icon 传入是否正常显示', () => {
    const wrapper = shallowMount(Button, {
      stubs: {
        AcIcon: Icon
      },
      propsData: {
        icon: 'lanqiu1'
      }
    })
    expect(wrapper.find('use').attributes('href')).to.eq('#ac-icon-lanqiu1')
  })
})

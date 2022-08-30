import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'
import Row from '@/packages/layout/Row.vue'
import Col from '@/packages/layout/Col.vue'

describe('1. 测试 gutter 是否正常？', async () => {
  let wrapper = shallowMount(Row, {
    attachToDocument: true,
    stubs: {
      AcCol: Col
    },
    slots: {
      default: `<AcCol></AcCol>`
    },
    propsData: {
      gutter: 20
    }
  })
  expect(getComputedStyle(wrapper.vm.$el).marginLeft).to.eq('-10px')
  expect(getComputedStyle(wrapper.vm.$el).marginRight).to.eq('-10px')
})

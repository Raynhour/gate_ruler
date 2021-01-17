import { shallowMount, mount } from '@vue/test-utils'
import { GlobalMountOptions } from '@vue/test-utils/dist/types'

import Component from '@/presentation/components/auth/Login.vue'

function createWrapper(
  props?: any,
  overrides?: GlobalMountOptions | undefined
) {
  const defaultMountingOptions = {
    sync: false
  }
  return mount(Component, {
    props: props,
    global: { ...defaultMountingOptions, ...overrides }
  })
}

describe('Login', () => {
  describe('When clear field', () => {
    it('Disabled login btn', () => {
      const wrapper = createWrapper()
      const btn = wrapper.find('button')
      expect(btn.attributes()).toHaveProperty('disabled')
    })
  })

  describe('Give not valid data', () => {
    it('Then i expect to stay at same page', () => {
      const wrapper = createWrapper()
    })
  })
})

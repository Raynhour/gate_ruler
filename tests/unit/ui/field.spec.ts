import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import { GlobalMountOptions } from '@vue/test-utils/dist/types'

import Component from '@/presentation/components/global/Field.vue'

function createWrapper(overrides?: GlobalMountOptions | undefined) {
  const defaultMountingOptions = {
    sync: false
  }
  return shallowMount(Component, {
    global: { ...defaultMountingOptions, ...overrides }
  })
}

describe('Field', () => {
  describe('When typing', () => {
    it('Input event called', async () => {
      // eslint-disable-next-line prettier/prettier
      const val = "val"
      const wrapper = shallowMount(Component, {
        props: {
          modelValue: val
        }
      })

      await wrapper.get('input').setValue(val)
      expect(wrapper.emitted()).toHaveProperty('update:modelValue')
      expect(wrapper.emitted()['update:modelValue'][0]).toEqual([val])
    })
  })
})

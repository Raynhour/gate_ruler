import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import { nextTick } from 'vue'

import Component from '@/presentation/views/Duel.vue'
import { DATA_TEST } from '@/utils/enums/elements.enum'
import INJECTIONS from '@/utils/enums/injections.enum'
import instance from '@/data/api/initApi'
import flushPromises from 'flush-promises'
import { GlobalMountOptions } from '@vue/test-utils/dist/types'
import Player1 from '@/presentation/components/duel/Player1.vue'
import Player2 from '@/presentation/components/duel/Player2.vue'

jest.mock('vue-router', () => ({
  useRoute: jest.fn().mockReturnValue({
    params: {
      id: 1
    }
  })
}))

function createWrapper(overrides?: GlobalMountOptions | undefined) {
  const defaultMountingOptions = {
    sync: false,
    stubs: {
      RouterLink: RouterLinkStub,
      transition: false
    },
    provide: {
      [INJECTIONS.API]: instance
    }
  }
  return shallowMount(Component, {
    global: { ...defaultMountingOptions, ...overrides }
  })
}

describe('Duel', () => {
  describe('When not loaded session', () => {
    it('Preloader showing', () => {
      const wrapper = createWrapper()
      const preloader = wrapper.find(
        `[data-test="${DATA_TEST.DUEL.PRELOADER}"]`
      )
      expect(preloader.exists()).toBe(true)
    })
  })

  describe('When loaded', () => {
    it('Preloader hidden', async () => {
      const wrapper = createWrapper()
      await flushPromises()
      const preloader = wrapper.find(
        `[data-test="${DATA_TEST.DUEL.PRELOADER}"]`
      )

      expect(preloader.exists()).toBe(false)
    })
  })

  describe('Given duel params', () => {
    async function _wrapper(overrides?: GlobalMountOptions | undefined) {
      const wrapper = createWrapper(overrides)
      await flushPromises()
      return wrapper
    }
    it('Then player1 view showed', async () => {
      const wrapper = await _wrapper()
      expect(wrapper.findComponent(Player1).exists()).toBe(true)
    })

    it('Then player2 view showed', async () => {
      const wrapper = await _wrapper()
      expect(wrapper.findComponent(Player2).exists()).toBe(true)
    })
  })
})

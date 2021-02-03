import { flushPromises, mount } from "@vue/test-utils";

import Component from "@/presentation/components/duel/Deck.vue";
import INJECTIONS from "@/utils/enums/injections.enum";
import { GlobalMountOptions } from "@vue/test-utils/dist/types";
import { duel } from "../../../mocks/duel.mock";
import { PLAYERS } from "@/presentation/composables/useGame";
import instance from "@/data/api/initApi";

function createWrapper(
  overrides?: GlobalMountOptions | undefined,
  props?: any
) {
  const defaultMountingOptions = {
    sync: false,
    stubs: {
      transition: false,
    },
    provide: {
      [INJECTIONS.API]: { api: instance },
      [INJECTIONS.CURRENT_PLAYER]: PLAYERS.PLAYER1,
    },
  };

  const defaultProps = {
    index: 1,
    zone: duel.player1.zone.attack[1],
  };
  return mount(Component, {
    props: { ...defaultProps, ...props },

    global: { ...defaultMountingOptions, ...overrides },
  });
}

describe("Deck.vue", () => {
  describe("When click on deck", () => {
    it("Then draw a card", async () => {
      const wrapper = createWrapper();
      await wrapper.getComponent({ ref: "deck" }).trigger("click");
      await flushPromises();
      expect(wrapper.emitted("topdeck")).toBeTruthy();
    });
  });

  describe("When mouse right click", () => {
    it.skip("Then show deck view", () => {
      throw new Error("not implemented");
    });
  });

  describe("When hover on deck", () => {
    it.skip("Then showing options menu", () => {
      throw new Error("not implemented");
    });
  });
});

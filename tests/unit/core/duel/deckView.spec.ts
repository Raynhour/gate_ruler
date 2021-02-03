import { mount } from "@vue/test-utils";

import Component from "@/presentation/components/duel/zone/UnitZone.vue";
import INJECTIONS from "@/utils/enums/injections.enum";
import { GlobalMountOptions } from "@vue/test-utils/dist/types";
import { duel } from "../../../mocks/duel.mock";
import { PLAYERS } from "@/presentation/composables/useGame";

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

describe("DeckView.vue", () => {
  describe("When click on close", () => {
    it("Then close view", () => {
      throw new Error("not implemented");
    });
  });

  describe("When mouse right click", () => {
    it("Then show deck view", () => {
      throw new Error("not implemented");
    });
  });

  describe("When hover on deck", () => {
    it("Then showing options menu", () => {
      throw new Error("not implemented");
    });
  });
});

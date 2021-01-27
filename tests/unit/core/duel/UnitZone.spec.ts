import { mount } from "@vue/test-utils";

import Component from "@/presentation/components/duel/zone/UnitZone.vue";
import { DATA_TEST } from "@/utils/enums/elements.enum";
import INJECTIONS from "@/utils/enums/injections.enum";
import instance from "@/data/api/initApi";
import { GlobalMountOptions } from "@vue/test-utils/dist/types";
import { Zone } from "@/domain/entities/core/zone";
import { duel } from "../../../mocks/duel.mock";
import flushPromises from "flush-promises";

import { changeUnitZone } from "@/presentation/composables/useGame";
import { CARD_POSITION } from "@/domain/entities/core/Card";

jest.mock("@/presentation/composables/useGame", () => ({
  ...jest.requireActual("@/presentation/composables/useGame"),
  changeUnitZone: jest.fn(),
}));

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const changeZoneMock = <jest.Mock<typeof changeUnitZone>>changeUnitZone;

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

describe("UnitZone.vue", () => {
  describe("Right mouse click", () => {
    it("Card should be rest", async () => {
      const wrapper = createWrapper();
      let zone = wrapper.getComponent({ ref: "zoneLink" });
      zone.trigger("contextmenu");
      await flushPromises();
      expect(changeUnitZone).toBeCalledWith(
        expect.objectContaining({
          position: CARD_POSITION.ATTACK,
        }),
        changeZoneMock.mock.calls[0][1],
        changeZoneMock.mock.calls[0][2]
      );
      expect(wrapper.exists()).toBe(true);
    });
  });
});

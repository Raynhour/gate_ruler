import { mount } from "@vue/test-utils";

import Component from "@/presentation/components/duel/zone/UnitZone.vue";
import { DATA_TEST } from "@/utils/enums/elements.enum";
import INJECTIONS from "@/utils/enums/injections.enum";
import instance from "@/data/api/initApi";
import { GlobalMountOptions } from "@vue/test-utils/dist/types";
import { Zone } from "@/domain/entities/core/zone";
import { duel, UNIT_ZONE_MOCK_REST } from "../../../mocks/duel.mock";
import flushPromises from "flush-promises";

import { changeUnitZone } from "@/presentation/composables/useGame";
import { CARD_POSITION } from "@/domain/entities/core/Card";

jest.mock("@/presentation/composables/useGame", () => ({
  ...jest.requireActual("@/presentation/composables/useGame"),
  changeUnitZone: jest.fn(),
}));

const changeZoneMock = changeUnitZone as jest.Mock;

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
  describe("Click on card", () => {
    it("Zone selected", async () => {
      const wrapper = createWrapper();
      await wrapper.getComponent({ ref: "zoneLink" }).trigger("click");
      let selectedZone = wrapper.find(".selected");
      expect(selectedZone.exists()).toBe(true);
    });

    describe("When click again", () => {
      it("Zone unselected", async () => {
        const wrapper = createWrapper();
        await wrapper.getComponent({ ref: "zoneLink" }).trigger("click");
        await wrapper.getComponent({ ref: "zoneLink" }).trigger("click");
        let selectedZone = wrapper.find(".selected");
        expect(selectedZone.exists()).toBe(true);
      });
    });
  });
  describe("Right mouse click", () => {
    it("Zone in attack position", async () => {
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
    });

    describe("When click again", () => {
      it("Then i expect to see default position", async () => {
        const wrapper = createWrapper(
          {},
          {
            index: 1,
            zone: UNIT_ZONE_MOCK_REST,
          }
        );
        let zone = wrapper.getComponent({ ref: "zoneLink" });
        zone.trigger("contextmenu");
        await flushPromises();
        expect(changeUnitZone).toBeCalledWith(
          expect.objectContaining({
            position: CARD_POSITION.DEFAULT,
          }),
          changeZoneMock.mock.calls[0][1],
          changeZoneMock.mock.calls[0][2]
        );
      });
    });
  });
});

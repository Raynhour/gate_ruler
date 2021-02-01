import { mount } from "@vue/test-utils";

import Component from "@/presentation/components/duel/zone/UnitZone.vue";
import INJECTIONS from "@/utils/enums/injections.enum";
import instance from "@/data/api/initApi";
import { GlobalMountOptions } from "@vue/test-utils/dist/types";
import {
  duel,
  PLAYER_VIEW_MOCK,
  UNIT_ZONE_MOCK_REST,
  UNIT_ZONE_SELECTED_PLAYER1_MOCK,
} from "../../../mocks/duel.mock";
import flushPromises from "flush-promises";

import {
  changeUnitZone,
  changeView,
  PLAYERS,
} from "@/presentation/composables/useGame";
import { CARD_POSITION } from "@/domain/entities/core/Card";
import { showPreview } from "@/presentation/composables/usePreview";

jest.mock("@/presentation/composables/useGame", () => ({
  ...jest.requireActual("@/presentation/composables/useGame"),
  changeUnitZone: jest.fn(),
  changeView: jest.fn(),
}));

jest.mock("@/presentation/composables/usePreview", () => ({
  showPreview: jest.fn(),
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
      [INJECTIONS.VIEW]: PLAYER_VIEW_MOCK,
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

describe("UnitZone.vue", () => {
  describe("Click on card", () => {
    beforeEach(() => jest.clearAllMocks());
    it("Zone selected", async () => {
      const wrapper = createWrapper();
      await wrapper.getComponent({ ref: "zoneLink" }).trigger("click");
      await flushPromises();
      expect(changeUnitZone).toBeCalledWith(
        expect.objectContaining({
          selected: expect.objectContaining({
            [PLAYERS.PLAYER1]: true,
          }),
        }),
        changeZoneMock.mock.calls[0][1],
        changeZoneMock.mock.calls[0][2]
      );
    });

    it("unselected other", async () => {
      const wrapper = createWrapper();
      await wrapper.getComponent({ ref: "zoneLink" }).trigger("click");
      await flushPromises();
      expect(changeView).toBeCalledTimes(1);
    });

    describe("When click again", () => {
      it("Zone unselected", async () => {
        const props = { zone: UNIT_ZONE_SELECTED_PLAYER1_MOCK };
        const wrapper = createWrapper({}, props);

        await wrapper.getComponent({ ref: "zoneLink" }).vm.$emit("click");
        // await wrapper.getComponent({ ref: "zoneLink" }).trigger("test");
        await flushPromises();

        expect(changeUnitZone).toBeCalledWith(
          expect.objectContaining({
            selected: expect.objectContaining({
              [PLAYERS.PLAYER1]: false,
            }),
          }),
          changeZoneMock.mock.calls[0][1],
          changeZoneMock.mock.calls[0][2]
        );
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

  describe("Hover on zone", () => {
    it("Then preview changed", async () => {
      const wrapper = createWrapper();
      let zone = wrapper.getComponent({ ref: "zoneLink" });
      await zone.trigger("mouseover");
      expect(showPreview).toBeCalledTimes(1);
    });
  });
});

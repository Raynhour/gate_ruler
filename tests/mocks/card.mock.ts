import { CARD_POSITION, CARD_TYPE, Card } from "@/domain/entities/core/Card";

export const CARD_MOCK_1: Card = {
  position: CARD_POSITION.DEFAULT,
  category: CARD_TYPE.UNIT,
  id: 0,
  name: "Knight of Oath Blade",
  effect: "default",
  img: "https://gaterealize.com/img/misc/0/MD-05.png",
};

export const ANY_CARD: Card = {
  position: CARD_POSITION.DEFAULT,
  category: CARD_TYPE.ANY,
  id: -1,
  name: "",
  effect: "",
};

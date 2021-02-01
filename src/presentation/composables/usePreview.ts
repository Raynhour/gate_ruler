import { Card } from "@/domain/entities/core/Card";
import { ANY_CARD } from "../../../tests/mocks/card.mock";
import { ref, Ref } from "vue";

const _preview: Card = ANY_CARD;
const preview: Ref<Card> = ref(_preview);

export const showPreview = (card: Card): void => {
  if (card.img === preview.value.img) return;
  preview.value = card;
};

export default function () {
  return { preview, showPreview };
}

import { h, customElement } from "atomico";
import style from "./atomico-card.css";

function AtomicoCard() {
  return (
    <host shadowDom styleSheet={style}>
      <slot></slot>
    </host>
  );
}

export default customElement("atomico-card", AtomicoCard);

import { c as customElement, a as createElement } from './chunks/e60af9b3.js';

var style = `:host{
    display: inline-block;
    transition: .3s ease all;
    position: relative;
    
}
:host(:hover){
    transform: scale(1.1);
}
`;

function AtomicoCard() {
  return createElement("host", {
    shadowDom: true,
    styleSheet: style
  }, createElement("slot", null));
}

var atomicoCard = customElement("atomico-card", AtomicoCard);

export default atomicoCard;
//# sourceMappingURL=atomico-card.js.map

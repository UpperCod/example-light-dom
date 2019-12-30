import { c as customElement, a as createElement } from './chunks/e60af9b3.js';

var style = `:host{
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    overflow: auto;
}

:host([fix="top"]){
    top: 0px;
    left: 0px;
}

nav{
    width: 100%;
}`;

function AtomicoHeader() {
  return createElement("host", {
    shadowDom: true,
    styleSheet: style
  }, createElement("style", null, "@import url(https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css)"), createElement("nav", {
    class: "navbar navbar-expand-lg navbar-light bg-light"
  }, createElement("a", {
    class: "navbar-brand",
    href: "#"
  }, "Navbar"), createElement("button", {
    class: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, createElement("span", {
    class: "navbar-toggler-icon"
  })), createElement("div", {
    class: "collapse navbar-collapse",
    id: "navbarSupportedContent"
  }, createElement("ul", {
    class: "navbar-nav mr-auto"
  }, createElement("li", {
    class: "nav-item active"
  }, createElement("a", {
    class: "nav-link",
    href: "#"
  }, "Home ", createElement("span", {
    class: "sr-only"
  }, "(current)"))), createElement("li", {
    class: "nav-item"
  }, createElement("a", {
    class: "nav-link",
    href: "#"
  }, "Link")), createElement("li", {
    class: "nav-item dropdown"
  }, createElement("a", {
    class: "nav-link dropdown-toggle",
    href: "#",
    id: "navbarDropdown",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, "Dropdown"), createElement("div", {
    class: "dropdown-menu",
    "aria-labelledby": "navbarDropdown"
  }, createElement("a", {
    class: "dropdown-item",
    href: "#"
  }, "Action"), createElement("a", {
    class: "dropdown-item",
    href: "#"
  }, "Another action"), createElement("div", {
    class: "dropdown-divider"
  }), createElement("a", {
    class: "dropdown-item",
    href: "#"
  }, "Something else here"))), createElement("li", {
    class: "nav-item"
  }, createElement("a", {
    class: "nav-link disabled",
    href: "#",
    tabindex: "-1",
    "aria-disabled": "true"
  }, "Disabled"))), createElement("form", {
    class: "form-inline my-2 my-lg-0"
  }, createElement("input", {
    class: "form-control mr-sm-2",
    type: "search",
    placeholder: "Search",
    "aria-label": "Search"
  }), createElement("button", {
    class: "btn btn-outline-success my-2 my-sm-0",
    type: "submit"
  }, "Search")))));
}

AtomicoHeader.props = {
  fix: {
    type: String,
    reflect: true,
    value: "top"
  }
};
var atomicoHeader = customElement("atomico-header", AtomicoHeader);

export default atomicoHeader;
//# sourceMappingURL=atomico-header.js.map

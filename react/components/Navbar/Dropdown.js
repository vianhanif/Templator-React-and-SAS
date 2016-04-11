"use strict";

var Dropdown = React.createClass({
  displayName: "Dropdown",

  propTypes: {
    dropdownMenus: React.PropTypes.array.isRequired,
    collapse: React.PropTypes.bool.isRequired
  },
  renderSubMenus: function renderSubMenus() {
    return this.props.dropdownMenus.map(function (menu, key) {
      if (key > 0) {
        return React.createElement(
          DropdownMenu,
          { key: key, link: menu[1] },
          menu[0]
        );
      }
    });
  },
  checkIsCollapse: function checkIsCollapse() {
    return this.props.collapse ? "menu-collapse" : "";
  },
  render: function render() {
    return React.createElement(
      "li",
      { className: "dropdown " + this.checkIsCollapse() },
      React.createElement(
        "a",
        { href: this.props.link, className: "dropdown-toggle", "data-toggle": "dropdown", role: "button", "aria-haspopup": "true", "aria-expanded": "false" },
        this.props.children,
        React.createElement("span", { className: "caret" })
      ),
      React.createElement(
        "ul",
        { className: "dropdown-menu" },
        this.renderSubMenus()
      )
    );
  }
});
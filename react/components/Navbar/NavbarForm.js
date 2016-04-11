"use strict";

var NavbarForm = React.createClass({
  displayName: "NavbarForm",

  render: function render() {
    return React.createElement(
      "form",
      { className: "navbar-form navbar-right", role: "search" },
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement("input", { type: "text", className: "form-control", placeholder: "Search" })
      )
    );
  }
});
"use strict";

var Footer = React.createClass({
  displayName: "Footer",

  render: function render() {
    return React.createElement(
      "nav",
      { className: "navbar-fixed-bottom panel-footer-mobile down-collapse" },
      React.createElement(
        "div",
        { className: "container-fluid text-center" },
        React.createElement(
          "ul",
          { className: "list-group" },
          React.createElement(
            "li",
            { className: "list-group-item" },
            React.createElement(
              "span",
              null,
              "Created by ",
              React.createElement(
                "b",
                null,
                React.createElement(
                  "a",
                  { href: "#" },
                  "Codime"
                )
              )
            )
          )
        )
      )
    );
  }
});
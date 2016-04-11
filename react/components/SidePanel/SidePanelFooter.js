"use strict";

var SidePanelFooter = React.createClass({
  displayName: "SidePanelFooter",

  propTypes: {
    children: React.PropTypes.string
  },
  getChild: function getChild() {
    return this.props.children;
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "list-group-item text-center sidepanel-footer" },
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
            this.getChild()
          )
        )
      )
    );
  }
});
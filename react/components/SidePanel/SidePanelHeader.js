"use strict";

var SidePanelHeader = React.createClass({
  displayName: "SidePanelHeader",

  propTypes: {
    children: React.PropTypes.string
  },
  getChild: function getChild() {
    return this.props.children;
  },
  render: function render() {
    return React.createElement(
      "li",
      { className: "list-group-item text-left " + this.props["class"] },
      React.createElement(
        "span",
        { className: "lead" },
        this.getChild()
      )
    );
  }
});
"use strict";

var DropdownMenu = React.createClass({
  displayName: "DropdownMenu",

  propTypes: {
    link: React.PropTypes.string.isRequired,
    children: React.PropTypes.string.isRequired
  },
  getChild: function getChild() {
    return this.props.children;
  },
  render: function render() {
    return React.createElement(
      "li",
      null,
      React.createElement(
        "a",
        { href: this.props.link },
        this.getChild()
      )
    );
  }
});
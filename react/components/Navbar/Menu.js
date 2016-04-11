"use strict";

var Menu = React.createClass({
  displayName: "Menu",

  propTypes: {
    children: React.PropTypes.string.isRequired,
    link: React.PropTypes.string
  },
  getChild: function getChild() {
    return this.props.children;
  },
  render: function render() {
    return React.createElement(
      "li",
      { className: this.props.children == this.props.active ? "active" : "" },
      React.createElement(
        "a",
        { href: this.props.link, className: "lead" },
        this.getChild()
      )
    );
  }
});
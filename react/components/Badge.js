"use strict";

var Badge = React.createClass({
  displayName: "Badge",

  propTypes: {
    type: React.PropTypes.string,
    children: React.PropTypes.string
  },
  render: function render() {
    return React.createElement(
      "span",
      { className: "badge badge-" + this.props.type },
      this.props.children
    );
  }
});
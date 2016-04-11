"use strict";

var Title = React.createClass({
  displayName: "Title",

  propTypes: {
    navbar: React.PropTypes.bool
  },
  checkIsBrand: function checkIsBrand() {
    return this.props.navbar ? "navbar-brand" : "";
  },
  render: function render() {
    return React.createElement(
      "h3",
      { className: "lead " + this.checkIsBrand() },
      React.createElement(
        "strong",
        null,
        "Daily",
        React.createElement(
          "mark",
          null,
          "Codime"
        )
      )
    );
  }
});
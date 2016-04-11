"use strict";

var Headline = React.createClass({
  displayName: "Headline",

  render: function render() {
    return React.createElement(
      "p",
      { className: "lead" },
      React.createElement(
        "mark",
        null,
        "Daily"
      ),
      " news about",
      React.createElement(
        "mark",
        null,
        "Cod"
      ),
      "e and An",
      React.createElement(
        "mark",
        null,
        "ime"
      )
    );
  }
});
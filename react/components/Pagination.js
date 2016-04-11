"use strict";

var Pagination = React.createClass({
  displayName: "Pagination",

  propTypes: {
    page: React.PropTypes.array
  },
  renderPages: function renderPages() {
    return this.props.pages.map(function (page, key) {
      return React.createElement(
        "li",
        { key: key },
        React.createElement(
          "a",
          { href: page[1] },
          page[0]
        )
      );
    });
  },
  render: function render() {
    return React.createElement(
      "nav",
      { className: "panel-pagination" },
      React.createElement(
        "ul",
        { className: "pagination" },
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#", "aria-label": "Previous" },
            React.createElement(
              "span",
              { "aria-hidden": "true" },
              "«"
            )
          )
        ),
        this.renderPages(),
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#", "aria-label": "Next" },
            React.createElement(
              "span",
              { "aria-hidden": "true" },
              "»"
            )
          )
        )
      )
    );
  }
});
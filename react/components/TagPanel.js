"use strict";

var TagPanel = React.createClass({
  displayName: "TagPanel",

  propTypes: {
    tags: React.PropTypes.array
  },
  renderTags: function renderTags() {
    return this.props.tags.map(function (tag, key) {
      return React.createElement(
        "li",
        { key: key },
        React.createElement(
          "a",
          { href: tag.link },
          React.createElement(
            Badge,
            { type: tag.type },
            tag.title
          )
        )
      );
    });
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "panel panel-default" },
      React.createElement(
        "div",
        { className: "panel-body panel-body-content" },
        React.createElement(
          "ul",
          { className: "list-group text-center" },
          React.createElement(
            "li",
            { className: "list-group-item badges" },
            React.createElement(
              "ul",
              { className: "list-inline" },
              this.renderTags()
            )
          )
        )
      )
    );
  }
});
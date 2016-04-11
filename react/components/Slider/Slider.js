"use strict";

var Slider = React.createClass({
  displayName: "Slider",

  propTypes: {
    tags: React.PropTypes.array,
    link: React.PropTypes.string,
    children: React.PropTypes.array
  },
  getChild: function getChild() {
    return this.props.children;
  },
  renderTags: function renderTags() {
    return this.props.tags.map(function (tag, key) {
      return React.createElement(
        "li",
        { key: key },
        React.createElement(
          Badge,
          { type: tag.type },
          tag.title
        )
      );
    });
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: this.props.index == 0 ? "item active" : "item" },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-sm-12" },
          React.createElement(
            "div",
            { className: "panel panel-default" },
            React.createElement(
              "div",
              { className: "panel-body" },
              React.createElement(
                "div",
                { className: "media" },
                React.createElement(
                  "div",
                  { className: "media-body text-justify" },
                  React.createElement(
                    "h4",
                    { className: "media-heading text-left lead" },
                    this.props.title,
                    React.createElement(
                      "ul",
                      { className: "list-inline" },
                      this.renderTags()
                    )
                  ),
                  React.createElement(
                    "ul",
                    { className: "list-unstyled" },
                    React.createElement(
                      Paragraph,
                      { type: "short" },
                      this.getChild()
                    )
                  )
                ),
                React.createElement(
                  "a",
                  { href: this.props.link },
                  "Read more..."
                )
              )
            )
          )
        )
      )
    );
  }
});
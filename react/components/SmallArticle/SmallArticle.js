"use strict";

var SmallArticle = React.createClass({
  displayName: "SmallArticle",

  propTypes: {
    link: React.PropTypes.string,
    title: React.PropTypes.string,
    source: React.PropTypes.string
  },
  render: function render() {
    return React.createElement(
      "li",
      { className: "list-group-item small-article" },
      React.createElement(
        "ul",
        { className: "list-inline" },
        React.createElement(
          "li",
          null,
          React.createElement(
            "div",
            { className: "media" },
            React.createElement(
              "div",
              { className: "media-body text-justify" },
              React.createElement(
                "h4",
                { className: "media-heading text-left" },
                React.createElement(
                  "a",
                  { href: this.props.link },
                  this.props.title
                )
              ),
              React.createElement(
                "blockquote",
                { className: "block-small-article" },
                React.createElement(
                  "footer",
                  null,
                  "Author : ",
                  React.createElement(
                    "cite",
                    null,
                    this.props.source
                  )
                )
              )
            )
          )
        )
      )
    );
  }
});
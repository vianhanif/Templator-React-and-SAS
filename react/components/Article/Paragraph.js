"use strict";

var Paragraph = React.createClass({
  displayName: "Paragraph",

  propTypes: {
    type: React.PropTypes.string.isRequired,
    children: React.PropTypes.array
  },
  renderParagraph: function renderParagraph() {
    return this.props.children.map(function (paragraph, key) {
      return React.createElement(
        "p",
        { className: "text-justify", key: key },
        paragraph
      );
    });
  },
  render: function render() {
    return React.createElement(
      "li",
      { className: "article-text-" + this.props.type },
      this.renderParagraph()
    );
  }
});
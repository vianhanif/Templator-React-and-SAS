"use strict";

var KontenBody = React.createClass({
  displayName: "KontenBody",

  propTypes: {
    article: React.PropTypes.object
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "col-md-7" },
      React.createElement(ArticleGroup, { articles: this.props.article.data, type: this.props.article.type,
        linker: this.props.article.linker, linkMore: false })
    );
  }
});
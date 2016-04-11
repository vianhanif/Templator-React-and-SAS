"use strict";

var SmallArticleGroup = React.createClass({
  displayName: "SmallArticleGroup",

  propTypes: {
    articles: React.PropTypes.array,
    type: React.PropTypes.string,
    collapse: React.PropTypes.bool
  },
  renderArticles: function renderArticles() {
    var type = this.props.type;
    return this.props.articles.map(function (article, key) {
      if (!type) {
        return React.createElement(SmallArticle, { key: key, link: article.link, title: article.title, source: article.source });
      } else if (key < 3) {
        return React.createElement(SmallArticle, { key: key, link: article.link, title: article.title, source: article.source });
      }
    });
  },
  checkIsCollapse: function checkIsCollapse() {
    return this.props.collapse ? "collapse navbar-collapse" : "";
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "panel panel-small-article " + this.checkIsCollapse() },
      React.createElement(
        "div",
        { className: "panel-body panel-body-content" },
        React.createElement(
          "ul",
          { className: "list-group text-center" },
          this.renderArticles()
        )
      )
    );
  }
});
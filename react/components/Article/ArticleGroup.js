"use strict";

var ArticleGroup = React.createClass({
  displayName: "ArticleGroup",

  propTypes: {
    articles: React.PropTypes.array,
    type: React.PropTypes.string,
    linkMore: React.PropTypes.bool
  },
  checkColoumnType: function checkColoumnType() {
    return this.props.type == "full" ? "col-md-12 panel-wide" : "col-md-6 col-sm-6 col-xs-12";
  },
  renderArticles: function renderArticles() {
    var linkMore = this.props.linkMore;
    var column = this.checkColoumnType();
    var type = this.props.type;
    return this.props.articles.map(function (article, key) {
      return React.createElement(
        "div",
        { key: key, className: column },
        React.createElement(
          Article,
          { type: type, link: article.link, title: article.title, tags: article.tags, source: article.source, linkMore: linkMore },
          article.content
        )
      );
    });
  },
  render: function render() {
    return React.createElement(
      "div",
      null,
      this.renderArticles()
    );
  }
});
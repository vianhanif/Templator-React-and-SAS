"use strict";

var IndexBody = React.createClass({
  displayName: "IndexBody",

  propTypes: {
    articles: React.PropTypes.object,
    pagination: React.PropTypes.array
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "container-fluid panel-content-container" },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(SliderGroup, { articles: this.props.articles.data })
      ),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(ArticleGroup, { articles: this.props.articles.data, type: this.props.articles.type, linker: this.props.articles.linker, linkMore: true })
      ),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-md-8 col-md-offset-2 text-center" },
          React.createElement(Pagination, { pages: this.props.pagination })
        )
      )
    );
  }
});
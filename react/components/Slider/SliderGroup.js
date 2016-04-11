"use strict";

var SliderGroup = React.createClass({
  displayName: "SliderGroup",

  propTypes: {
    articles: React.PropTypes.array,
    tags: React.PropTypes.array
  },
  renderSlides: function renderSlides() {
    return this.props.articles.map(function (article, key) {
      return React.createElement(
        Slider,
        { link: article.link, key: key, index: key, tags: article.tags, title: article.title },
        article.content.paragraph
      );
    });
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "col-md-12 panel-ad" },
      React.createElement(
        "div",
        { id: "carousel-recent", className: "carousel slide collapse navbar-collapse", "data-ride": "carousel" },
        React.createElement(
          "div",
          { className: "carousel-inner", role: "listbox" },
          this.renderSlides()
        ),
        React.createElement(
          "a",
          { className: "left carousel-control", href: "#carousel-recent", role: "button", "data-slide": "prev" },
          React.createElement("span", { className: "glyphicon glyphicon-chevron-left", "aria-hidden": "true" }),
          React.createElement(
            "span",
            { className: "sr-only" },
            "Previous"
          )
        ),
        React.createElement(
          "a",
          { className: "right carousel-control", href: "#carousel-recent", role: "button", "data-slide": "next" },
          React.createElement("span", { className: "glyphicon glyphicon-chevron-right", "aria-hidden": "true" }),
          React.createElement(
            "span",
            { className: "sr-only" },
            "Next"
          )
        )
      )
    );
  }
});
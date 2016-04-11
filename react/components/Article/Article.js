"use strict";

var Article = React.createClass({
  displayName: "Article",

  propTypes: {
    link: React.PropTypes.string.isRequired,
    children: React.PropTypes.object,
    type: React.PropTypes.string.isRequired,
    tags: React.PropTypes.array,
    linkMore: React.PropTypes.bool.isRequired
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
  shouldLinkMore: function shouldLinkMore() {
    return this.props.linkMore ? React.createElement(
      "li",
      { className: "article-footer text-left" },
      React.createElement(
        "a",
        { href: this.props.link },
        "Read More..."
      )
    ) : null;
  },
  renderParagraph: function renderParagraph() {
    return React.createElement(
      Paragraph,
      { type: this.props.type },
      this.getChild().paragraph
    );
  },
  renderVideo: function renderVideo() {
    return React.createElement(Video, { src: this.getChild().video });
  },
  renderImage: function renderImage() {
    return React.createElement(Image, { src: this.getChild().image });
  },
  renderArticles: function renderArticles() {
    var content = {
      paragraph: this.renderParagraph(),
      video: this.renderVideo(),
      image: this.renderImage()
    };
    return this.getChild().video != "" ? React.createElement(
      "div",
      null,
      content.video,
      content.paragraph
    ) : this.getChild().image != "" ? React.createElement(
      "div",
      null,
      content.image,
      content.paragraph
    ) : null;
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "panel panel-default" },
      React.createElement(
        "div",
        { className: "panel-heading" },
        React.createElement(
          "div",
          { className: "panel-title" },
          React.createElement(
            "a",
            { href: this.props.link },
            React.createElement(
              "span",
              { className: "lead" },
              this.props.title
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "panel-body" },
        React.createElement(
          "ul",
          { className: "list-unstyled" },
          React.createElement(
            "li",
            null,
            React.createElement(
              "ul",
              { className: "list-inline" },
              this.renderTags()
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "blockquote",
              null,
              React.createElement(
                "footer",
                null,
                "Author : ",
                React.createElement(
                  "cite",
                  { title: "Source Title" },
                  this.props.source
                )
              )
            )
          ),
          React.createElement(
            "div",
            null,
            this.renderArticles()
          ),
          this.shouldLinkMore()
        )
      )
    );
  }
});
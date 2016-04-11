"use strict";

var SidePanel = React.createClass({
  displayName: "SidePanel",

  propTypes: {
    articles: React.PropTypes.array,
    tags: React.PropTypes.array,
    type: React.PropTypes.string
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "col-lg-4 panel-sidepanel" },
      React.createElement(
        "div",
        { className: "panel panel-default" },
        React.createElement(
          "div",
          { className: "panel-body text-center" },
          React.createElement(
            "ul",
            { className: "list-group list-unstyled text-center" },
            React.createElement(
              "li",
              { className: "list-group-item title" },
              React.createElement(Title, { navbar: false })
            ),
            React.createElement(
              "li",
              { className: "list-group-item hello" },
              React.createElement(Headline, null)
            )
          )
        )
      ),
      React.createElement(
        SidePanelHeader,
        { "class": "list-header-collapse-xsmall" },
        "Recent"
      ),
      React.createElement(SmallArticleGroup, { articles: this.props.articles, type: this.props.type, collapse: this.props.collapse }),
      React.createElement(
        "div",
        { className: "panel-collapse" },
        React.createElement(
          SidePanelHeader,
          null,
          "Tags"
        )
      ),
      React.createElement(
        "div",
        { className: "panel-collapse" },
        React.createElement(TagPanel, { tags: this.props.tags })
      ),
      React.createElement(
        SidePanelFooter,
        null,
        "Codime"
      )
    );
  }
});
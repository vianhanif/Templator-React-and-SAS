"use strict";

var Konten = React.createClass({
  displayName: "Konten",

  propTypes: {
    source: React.PropTypes.string
  },
  getResources: function getResources() {
    $.ajax({ url: this.props.source, dataType: 'json', cache: false,
      success: (function (data) {
        this.setState({ resources: data });
      }).bind(this),
      error: (function (xhr, status, err) {
        console.error(this.props.source, status, err.toString());
      }).bind(this)
    });
  },
  getInitialState: function getInitialState() {
    return { resources: { "pagination": [[]], "page": { "navbarCollapse": false, "navbarRight": false, "navbarLeft": false, "navbarForm": false }, "tags": [{ "title": "", "link": "", "type": "" }], "menu": { "left": [[]], "right": [[]] }, "article": { "type": "", "data": [{ "title": "", "tags": [{ "title": "", "link": "", "type": "" }], "source": "", "link": "", "content": { "image": "", "video": "", "paragraph": [] } }] }, "smallarticles": { "data": [{ "title": "", "tags": [{ "title": "", "link": "", "type": "" }], "source": "", "link": "", "content": { "image": "", "video": "", "paragraph": [] } }] } } };
  },
  componentDidMount: function componentDidMount() {
    var resource = this.props.source;
    this.getResources();
    setInterval(this.getResources, 2000);
  },
  render: function render() {
    var json = this.state.resources;
    console.log(json);
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "container-fluid" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-lg-12 full-width" },
            React.createElement(Navbar, { menus: json.menus, page: json.page, addMargin: false, title: true, active: json.page.active }),
            React.createElement(
              "div",
              { className: "container-fluid panel-article panel-content-container" },
              React.createElement(
                "div",
                { className: "row" },
                React.createElement(KontenBody, { article: json.article }),
                React.createElement(
                  "div",
                  { className: "col-md-5" },
                  React.createElement(
                    "div",
                    { className: "panel panel-default pane-small-article" },
                    React.createElement(
                      "div",
                      { className: "panel-body panel-body-content" },
                      React.createElement(
                        SidePanelHeader,
                        null,
                        "Recent"
                      ),
                      React.createElement(SmallArticleGroup, { articles: json.smallArticles.data, collapse: false })
                    )
                  )
                )
              )
            )
          )
        )
      ),
      React.createElement(Footer, null)
    );
  }
});
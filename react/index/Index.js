"use strict";

var Index = React.createClass({
  displayName: "Index",

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
    return { resources: { "page": { "navbarCollapse": false, "navbarRight": false, "navbarLeft": false, "navbarForm": false }, "menu": { "left": [[]], "right": [[]] }, "tags": [{ "title": "", "link": "", "type": "" }], "pagination": [[]], "articles": { "type": "", "data": [{ "title": "", "tags": [{ "title": "", "link": "", "type": "" }], "source": "", "link": "", "content": { "image": "", "video": "", "paragraph": [] } }] } } };
  },
  componentDidMount: function componentDidMount() {
    this.getResources();
    setInterval(this.getResources, 2000);
  },
  render: function render() {
    var json = this.state.resources;
    return React.createElement(
      "div",
      null,
      React.createElement(SidePanel, { type: json.articles.type, articles: json.articles.data, tags: json.tags, collapse: true }),
      React.createElement(Navbar, { menus: json.menus, page: json.page, addMargin: true, title: false, active: json.page.active }),
      React.createElement(
        "div",
        { className: "container-fluid" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-lg-8 col-lg-offset-4 full-width" },
            React.createElement(IndexBody, { articles: json.articles, pagination: json.pagination })
          )
        )
      ),
      React.createElement(Footer, null)
    );
  }
});
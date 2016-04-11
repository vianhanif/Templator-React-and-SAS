"use strict";

var Navbar = React.createClass({
  displayName: "Navbar",

  propTypes: {
    menus: React.PropTypes.object,
    page: React.PropTypes.object,
    addMargin: React.PropTypes.bool,
    title: React.PropTypes.bool,
    active: React.PropTypes.string
  },
  checkIsCollapse: function checkIsCollapse() {
    return this.props.page.navbarCollapse ? "collapse navbar-collapse" : "";
  },
  navbarLeft: function navbarLeft() {
    return this.props.page.navbarLeft ? {
      float: "left",
      margin: this.props.addMargin,
      menu: this.props.menus.left,
      page: this.props.page.active,
      collapse: this.props.page.navbarCollapse,
      active: this.props.active
    } : null;
  },
  navbarRight: function navbarRight() {
    return this.props.page.navbarRight ? {
      float: "right",
      margin: this.props.addMargin,
      menu: this.props.menus.right,
      page: this.props.page.active,
      collapse: this.props.page.navbarCollapse,
      active: this.props.active
    } : null;
  },
  renderNav: function renderNav(nav) {
    return nav != null ? React.createElement(NavsGroup, { addMargin: nav.margin,
      options: nav.menu,
      page: nav.page,
      float: nav.float,
      collapse: nav.collapse,
      active: nav.active }) : null;
  },
  renderForm: function renderForm() {
    return this.props.page.navbarForm ? React.createElement(NavbarForm, null) : null;
  },
  renderTitle: function renderTitle() {
    return this.props.title ? React.createElement(Title, { navbar: true }) : null;
  },
  render: function render() {
    return React.createElement(
      "nav",
      { className: "navbar navbar-default panel-navbar full-nav " + this.checkIsCollapse() },
      React.createElement(
        "div",
        { className: "container-fluid" },
        React.createElement(
          "div",
          { className: "navbar-header" },
          React.createElement(
            "button",
            { type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#bs-example-navbar-collapse-1", "aria-expanded": "false" },
            React.createElement(
              "span",
              { className: "sr-only" },
              "Toggle navigation"
            ),
            React.createElement("span", { className: "icon-bar" }),
            React.createElement("span", { className: "icon-bar" }),
            React.createElement("span", { className: "icon-bar" })
          ),
          this.renderTitle()
        ),
        React.createElement(
          "div",
          { className: "collapse navbar-collapse", id: "bs-example-navbar-collapse-1" },
          this.renderNav(this.navbarLeft()),
          this.renderForm(),
          this.renderNav(this.navbarRight())
        )
      )
    );
  }
});
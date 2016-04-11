"use strict";

var NavsGroup = React.createClass({
  displayName: "NavsGroup",

  propTypes: {
    float: React.PropTypes.string.isRequired,
    collapse: React.PropTypes.bool.isRequired,
    options: React.PropTypes.array,
    addMargin: React.PropTypes.bool.isRequired,
    active: React.PropTypes.string
  },
  checkMenuFloat: function checkMenuFloat() {
    var float = this.props.float == "right" ? "nav navbar-nav navbar-right" : "nav navbar-nav navbar-left";
    return float + this.shouldAddMargin();
  },
  shouldAddMargin: function shouldAddMargin() {
    return this.props.addMargin ? "" : " navbar-float-left";
  },
  renderMenus: function renderMenus() {
    var collapse = this.props.collapse;
    var active = this.props.active;
    return this.props.options.map(function (option, key) {
      if (option.length >= 2) {
        return React.createElement(
          Dropdown,
          { collapse: collapse, key: key, dropdownMenus: option, link: option[0][1] },
          option[0][0]
        );
      } else {
        return React.createElement(
          Menu,
          { link: option[0][1], key: key, active: active },
          option[0][0]
        );
      }
    });
  },
  render: function render() {
    return React.createElement(
      "ul",
      { className: this.checkMenuFloat() },
      this.renderMenus()
    );
  }
});
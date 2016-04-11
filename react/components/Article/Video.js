"use strict";

var Video = React.createClass({
  displayName: "Video",

  propTypes: {
    src: React.PropTypes.string
  },
  render: function render() {
    return React.createElement(
      "li",
      null,
      React.createElement(
        "div",
        { className: "embed-responsive embed-responsive-16by9" },
        React.createElement("iframe", { className: "embed-responsive-item", src: this.props.src, frameBorder: "0", allowFullScreen: true })
      )
    );
  }
});
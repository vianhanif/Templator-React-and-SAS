"use strict";

var Image = React.createClass({
  displayName: "Image",

  propTypes: {
    src: React.PropTypes.string
  },
  render: function render() {
    return React.createElement(
      "li",
      { className: "konten-img" },
      React.createElement("img", { src: this.props.src, className: "img-responsive" })
    );
  }
});
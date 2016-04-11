var Badge = React.createClass({
propTypes: {
  type : React.PropTypes.string,
  children : React.PropTypes.string,
},
render: function(){
  return (
    <span className={"badge badge-"+this.props.type}>{this.props.children}</span>
  );
}
});
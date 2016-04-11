var DropdownMenu = React.createClass({
propTypes : {
  link : React.PropTypes.string.isRequired,
  children : React.PropTypes.string.isRequired,
},
getChild: function(){
  return this.props.children;
},
render: function(){
  return(
    <li>
      <a href={this.props.link}>{this.getChild()}</a>
    </li>
  );
  }
});
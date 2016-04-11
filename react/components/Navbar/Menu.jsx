var Menu = React.createClass({
propTypes : {
  children : React.PropTypes.string.isRequired,
  link : React.PropTypes.string,
},
getChild: function(){
  return this.props.children;
},
render : function(){
  return(
    <li className={this.props.children == this.props.active? "active" : ""}>
      <a href={this.props.link} className="lead">{this.getChild()}</a>
    </li>
  );
}
});
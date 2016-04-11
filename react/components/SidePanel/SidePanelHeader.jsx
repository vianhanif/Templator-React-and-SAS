var SidePanelHeader = React.createClass({
propTypes : {
  children : React.PropTypes.string,
},
getChild: function(){
return this.props.children;
},
render: function(){
  return(
  <li className={"list-group-item text-left " + this.props.class}><span className="lead">{this.getChild()}</span></li>
  );
}
});
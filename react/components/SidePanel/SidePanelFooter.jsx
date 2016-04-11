var SidePanelFooter = React.createClass({
propTypes : {
  children : React.PropTypes.string,
},
getChild: function(){
  return this.props.children;
},
render: function(){
  return(
    <div className="list-group-item text-center sidepanel-footer">
      <span>Created by <b><a href="#">{this.getChild()}</a></b></span>
    </div>
  );
}
});
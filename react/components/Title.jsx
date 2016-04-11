var Title = React.createClass({
propTypes: {
  navbar : React.PropTypes.bool,
},
checkIsBrand: function(){
  return this.props.navbar? "navbar-brand" : "";
},
render: function (){
  return(
    <h3 className={"lead " + this.checkIsBrand()}><strong>Daily<mark>Codime</mark></strong></h3>
  );
}
});
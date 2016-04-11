var Image = React.createClass({
propTypes : {
  src : React.PropTypes.string,
},
render: function(){
  return(
    <li className="konten-img"><img src={this.props.src} className="img-responsive"/></li>
  );
}
});
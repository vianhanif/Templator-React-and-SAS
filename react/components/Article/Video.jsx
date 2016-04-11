var Video = React.createClass({
propTypes : {
  src : React.PropTypes.string,
},
render: function(){
  return(
    <li>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={this.props.src} frameBorder="0" allowFullScreen></iframe>
      </div>
    </li>
  );
}
});
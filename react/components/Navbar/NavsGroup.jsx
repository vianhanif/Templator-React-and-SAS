var NavsGroup = React.createClass({
propTypes : {
  float : React.PropTypes.string.isRequired,
  collapse : React.PropTypes.bool.isRequired,
  options : React.PropTypes.array,
  addMargin : React.PropTypes.bool.isRequired,
  active : React.PropTypes.string
},
checkMenuFloat: function(){
  var float = this.props.float == "right" ? "nav navbar-nav navbar-right" : "nav navbar-nav navbar-left";
  return float + this.shouldAddMargin();
},
shouldAddMargin: function(){
  return this.props.addMargin ? "" : " navbar-float-left";
},
renderMenus: function(){
  var collapse = this.props.collapse;
  var active = this.props.active;
  return this.props.options.map(function(option, key){
            if(option.length >= 2){
              return <Dropdown collapse={collapse} key={key} dropdownMenus={option} link={option[0][1]}>{option[0][0]}</Dropdown>;
            }
            else{
              return <Menu link={option[0][1]} key={key} active={active}>{option[0][0]}</Menu>;
            }
          });
},
render: function(){
  return (
    <ul className={this.checkMenuFloat()}>
      {this.renderMenus()}
    </ul>
  );
}
});
var Dropdown = React.createClass({
propTypes : {
  dropdownMenus : React.PropTypes.array.isRequired,
  collapse : React.PropTypes.bool.isRequired,
},
renderSubMenus: function(){
  return this.props.dropdownMenus.map(function(menu, key){
              if (key > 0){
                return <DropdownMenu key={key} link={menu[1]}>{menu[0]}</DropdownMenu>;
              }
          });
},
checkIsCollapse: function(){
  return this.props.collapse ? "menu-collapse" : "";
},
render: function(){
  return(
    <li className={"dropdown " + this.checkIsCollapse()}>
      <a href={this.props.link} className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{this.props.children}<span className="caret"></span></a>
      <ul className="dropdown-menu">
        {this.renderSubMenus()}
      </ul>
    </li>
  );
}
});
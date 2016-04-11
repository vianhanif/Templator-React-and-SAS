var Navbar = React.createClass({
propTypes : {
  menus : React.PropTypes.object,
  page : React.PropTypes.object,
  addMargin : React.PropTypes.bool,
  title : React.PropTypes.bool,
  active : React.PropTypes.string
},  
checkIsCollapse: function(){
  return this.props.page.navbarCollapse ? "collapse navbar-collapse" : "";
},
navbarLeft: function(){
  return this.props.page.navbarLeft ? {
    float: "left",
    margin: this.props.addMargin,
    menu: this.props.menus.left,
    page: this.props.page.active,
    collapse: this.props.page.navbarCollapse,
    active: this.props.active,
    } : null;
},
navbarRight: function(){
  return this.props.page.navbarRight ? {
    float: "right",
    margin: this.props.addMargin,
    menu: this.props.menus.right,
    page: this.props.page.active,
    collapse: this.props.page.navbarCollapse,
    active: this.props.active,
    } : null;
},
renderNav: function(nav){
  return nav != null?
    <NavsGroup  addMargin={nav.margin} 
                options={nav.menu} 
                page={nav.page} 
                float={nav.float} 
                collapse={nav.collapse} 
                active={nav.active}>
    </NavsGroup>
    :null;  
},
renderForm: function(){
  return this.props.page.navbarForm ? <NavbarForm></NavbarForm> : null;
},
renderTitle: function(){
  return this.props.title ? <Title navbar={true}></Title> : null;
},
render: function () {
    return (
    <nav className={"navbar navbar-default panel-navbar full-nav " + this.checkIsCollapse()}>
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              {this.renderTitle()}
            </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            {this.renderNav(this.navbarLeft())}
            {this.renderForm()}
            {this.renderNav(this.navbarRight())}
            </div>
          </div>
        </nav>
    );
  }
});

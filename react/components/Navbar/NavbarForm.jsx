var NavbarForm = React.createClass({
render : function(){
  return (
    <form className="navbar-form navbar-right" role="search">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Search"/>
      </div>
    </form>
  );
}
});
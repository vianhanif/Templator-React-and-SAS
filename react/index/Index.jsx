var Index = React.createClass({
  propTypes:{
    source : React.PropTypes.string
  },
  getResources: function(){
    $.ajax({url: this.props.source,dataType: 'json',cache: false,
      success: function(data) {this.setState({resources: data});}.bind(this),
      error: function(xhr, status, err) {console.error(this.props.source, status, err.toString());}.bind(this)
    });
  },
  getInitialState: function() {
    return {resources: {"page" : {"navbarCollapse" : false,"navbarRight" : false,"navbarLeft" : false,"navbarForm" : false},"menu" : {"left" : [[]],"right" : [[]],},"tags" : [{"title" : "","link" : "","type" : ""}],"pagination" : [[]],"articles" : {"type" : "","data" : [{"title" : "","tags" : [{"title" : "","link" : "","type" : ""}],"source" : "","link" : "","content" :{"image" :"","video" : "","paragraph" : []}}],},}};
  },
  componentDidMount: function() {
    this.getResources();
    setInterval(this.getResources, 2000);
  },
  render: function () {
    var json = this.state.resources;
    return (
      <div>
      <SidePanel type={json.articles.type} articles={json.articles.data} tags={json.tags} collapse={true}></SidePanel>
        <Navbar menus={json.menus} page={json.page} addMargin={true} title={false} active={json.page.active}></Navbar>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-4 full-width">
            <IndexBody articles={json.articles} pagination={json.pagination}></IndexBody>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
});
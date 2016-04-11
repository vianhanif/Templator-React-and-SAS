var Konten = React.createClass({
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
    return {resources: {"pagination" : [[]],"page" : {"navbarCollapse" : false,"navbarRight" : false,"navbarLeft" : false,"navbarForm" : false,},"tags" : [{"title" : "","link" : "","type" : ""}],"menu" : {"left" : [[]],"right" : [[]],},"article" : {"type" : "","data" : [{"title" : "","tags" : [{"title" : "","link" : "","type" : ""}],"source" : "","link" : "","content" :{"image" : "","video" : "","paragraph" : []}}],},"smallarticles" : {"data" : [{"title" : "","tags" : [{"title" : "","link" : "","type" : ""}],"source" : "","link" : "","content" :{"image" : "","video" : "","paragraph" : []}}],},}};
  },
  componentDidMount: function() {
    var resource = this.props.source;    
    this.getResources();
    setInterval(this.getResources, 2000);
  },
render : function (){
  var json = this.state.resources;
  console.log(json);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 full-width">
          <Navbar menus={json.menus} page={json.page} addMargin={false} title={true} active={json.page.active}></Navbar>
            <div className="container-fluid panel-article panel-content-container">
              <div className="row">
                <KontenBody article={json.article}></KontenBody>
                <div className="col-md-5">
                  <div className="panel panel-default pane-small-article">
                    <div className="panel-body panel-body-content">
                      <SidePanelHeader>Recent</SidePanelHeader>
                      <SmallArticleGroup articles={json.smallArticles.data} collapse={false}></SmallArticleGroup>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <Footer></Footer>
    </div>
  );
}
});
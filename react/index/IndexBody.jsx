var IndexBody = React.createClass({
propTypes : {
  articles : React.PropTypes.object,
  pagination : React.PropTypes.array
},
render: function(){
  return (
    <div className="container-fluid panel-content-container">
      <div className="row">
        <SliderGroup articles={this.props.articles.data}></SliderGroup>
      </div>
      <div className="row">
        <ArticleGroup articles={this.props.articles.data} type={this.props.articles.type} linker={this.props.articles.linker} linkMore={true}/>
      </div>
      <div className="row">
        <div className="col-md-8 col-md-offset-2 text-center">
          <Pagination pages={this.props.pagination}></Pagination>
        </div>
      </div>
    </div>
  );
}
});
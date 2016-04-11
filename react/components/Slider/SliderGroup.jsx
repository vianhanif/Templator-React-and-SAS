var SliderGroup = React.createClass({
propTypes : {
  articles : React.PropTypes.array,
  tags : React.PropTypes.array
},
renderSlides: function(){
  return this.props.articles.map( function(article, key){
      return (
          <Slider link={article.link} key={key} index={key} tags={article.tags} title={article.title}>{article.content.paragraph}</Slider>
        );
  });
},
render: function (){
  return (
    <div className="col-md-12 panel-ad">
      <div id="carousel-recent" className="carousel slide collapse navbar-collapse" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          {this.renderSlides()}
        </div>
        <a className="left carousel-control" href="#carousel-recent" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#carousel-recent" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
} 
});
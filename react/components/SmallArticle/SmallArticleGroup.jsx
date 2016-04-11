var SmallArticleGroup = React.createClass({
propTypes : {
  articles : React.PropTypes.array,
  type: React.PropTypes.string,
  collapse: React.PropTypes.bool
},
renderArticles: function(){
  var type = this.props.type;
  return this.props.articles.map(function(article, key){
            if(!type){
                return <SmallArticle key={key} link={article.link} title={article.title} source={article.source}></SmallArticle> 
            }else if(key < 3){
                return <SmallArticle key={key} link={article.link} title={article.title} source={article.source}></SmallArticle> 
            }
          });
},
checkIsCollapse: function(){
  return this.props.collapse? "collapse navbar-collapse" : "";
},
render: function(){
  return (
        <div className={"panel panel-small-article " + this.checkIsCollapse()}>
          <div className="panel-body panel-body-content">
            <ul className="list-group text-center">
                {this.renderArticles()}
            </ul>
          </div>
        </div>
  );
}
});
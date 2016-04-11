var KontenBody = React.createClass({
propTypes : {
  article : React.PropTypes.object
},
render: function(){
  return (
        <div className="col-md-7">
          <ArticleGroup articles={this.props.article.data} type={this.props.article.type} 
            linker={this.props.article.linker} linkMore={false}/>
        </div>
  );
}
});
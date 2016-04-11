var Article = React.createClass({
propTypes : {
  link : React.PropTypes.string.isRequired,
  children : React.PropTypes.object,
  type : React.PropTypes.string.isRequired,
  tags : React.PropTypes.array,
  linkMore : React.PropTypes.bool.isRequired
},
getChild: function(){
  return this.props.children;
},
renderTags: function(){
  return this.props.tags.map(function(tag, key){
            return(<li key={key}><Badge type={tag.type}>{tag.title}</Badge></li>);});
},
shouldLinkMore: function(){
  return this.props.linkMore? <li className="article-footer text-left"><a href={this.props.link}>Read More...</a></li> : null; 
},
renderParagraph: function(){
  return <Paragraph type={this.props.type}>{this.getChild().paragraph}</Paragraph>;
},
renderVideo: function(){
  return <Video src={this.getChild().video}></Video>;
},
renderImage: function(){
  return <Image src={this.getChild().image}></Image>;
},
renderArticles: function(){
  var content = {
    paragraph: this.renderParagraph(),
    video: this.renderVideo(),
    image: this.renderImage()
  };
  return this.getChild().video != "" ? <div>{content.video}{content.paragraph}</div> :
         this.getChild().image != "" ? <div>{content.image}{content.paragraph}</div> :
         null;  
},
render: function(){
  return (
            <div className="panel panel-default">
                <div className="panel-heading">
                  <div className="panel-title"><a href={this.props.link}><span className="lead">{this.props.title}</span></a></div>
                </div>
                <div className="panel-body">
                  <ul className="list-unstyled">
                    <li>
                      <ul className="list-inline">
                      {this.renderTags()}
                      </ul>
                    </li>
                    <li>
                      <blockquote>
                        <footer>Author : <cite title="Source Title">{this.props.source}</cite></footer>
                      </blockquote>
                    </li>
                    <div>
                    {this.renderArticles()}
                    </div>
                    {this.shouldLinkMore()}
                  </ul>
                </div>
              </div>
  );
},
});
var Slider = React.createClass({
propTypes : {
  tags : React.PropTypes.array,
  link : React.PropTypes.string,
  children : React.PropTypes.array
},
getChild: function(){
  return this.props.children;
},
renderTags: function(){
  return this.props.tags.map( function(tag, key){
            return (
              <li key={key}><Badge type={tag.type}>{tag.title}</Badge></li>
            ); 
          })
},
render: function(){
  return (
    <div className={this.props.index == 0? "item active": "item"}>
      <div className="row">
        <div className="col-sm-12">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="media">
                <div className="media-body text-justify">
                  <h4 className="media-heading text-left lead">{this.props.title} 
                    <ul className="list-inline">
                      {this.renderTags()}
                    </ul>
                  </h4>
                  <ul className="list-unstyled">
                    <Paragraph type={"short"}>{this.getChild()}</Paragraph>
                  </ul>
                </div>
                <a href={this.props.link}>Read more...</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
});
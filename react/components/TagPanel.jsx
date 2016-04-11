var TagPanel = React.createClass({
propTypes : {
  tags : React.PropTypes.array,
},
renderTags: function(){
  return this.props.tags.map( function(tag, key){
            return(
            <li key={key}>
              <a href={tag.link}>
                <Badge type={tag.type}>{tag.title}</Badge>
              </a>
            </li>
            );
          });
},
render: function(){
  return(
    <div className="panel panel-default">
      <div className="panel-body panel-body-content">
        <ul className="list-group text-center">
          <li className="list-group-item badges">
            <ul className="list-inline">
              {this.renderTags()}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
});
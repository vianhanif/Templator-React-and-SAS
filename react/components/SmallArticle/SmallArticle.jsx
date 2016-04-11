var SmallArticle = React.createClass({
propTypes : {
  link : React.PropTypes.string,
  title : React.PropTypes.string,
  source : React.PropTypes.string,
},
render: function(){
  return(
    <li className="list-group-item small-article">
      <ul className="list-inline">
        <li>
          <div className="media">
            <div className="media-body text-justify">
              <h4 className="media-heading text-left">
                <a href={this.props.link}>{this.props.title}</a>
              </h4>
              <blockquote className="block-small-article">
                <footer>Author : <cite>{this.props.source}</cite></footer>
              </blockquote>
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
  }
});
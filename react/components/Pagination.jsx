var Pagination = React.createClass({
propTypes : {
  page : React.PropTypes.array
},
renderPages: function(){
  return this.props.pages.map( function(page, key){
            return (
              <li key={key}><a href={page[1]}>{page[0]}</a></li>
            );
          });
},
render: function(){
  return (
    <nav className="panel-pagination">
      <ul className="pagination">
        <li>
          <a href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {this.renderPages()}
        <li>
          <a href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
});
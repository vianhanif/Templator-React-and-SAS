var Paragraph = React.createClass({
propTypes : {
  type : React.PropTypes.string.isRequired,
  children : React.PropTypes.array,
},
renderParagraph: function(){
  return this.props.children.map(function(paragraph, key){
            return(
              <p className="text-justify" key={key}>
                {paragraph}
              </p>
            );
          });
},
render: function(){
  return(
    <li className={"article-text-"+ this.props.type}>
      {this.renderParagraph()}
    </li>
  );
}
});
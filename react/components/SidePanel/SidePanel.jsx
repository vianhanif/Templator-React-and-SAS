var SidePanel = React.createClass({
  propTypes: {
    articles : React.PropTypes.array,
    tags : React.PropTypes.array,
    type : React.PropTypes.string
  },
  render: function () {
    return (
    <div className="col-lg-4 panel-sidepanel">
    <div className="panel panel-default">
      <div className="panel-body text-center">
        <ul className="list-group list-unstyled text-center">
          <li className="list-group-item title">
            <Title navbar={false}></Title>
          </li>
          <li className="list-group-item hello">
            <Headline></Headline>
          </li>
        </ul>
      </div>
    </div>
    <SidePanelHeader class="list-header-collapse-xsmall">Recent</SidePanelHeader>
    <SmallArticleGroup articles={this.props.articles} type={this.props.type} collapse={this.props.collapse}></SmallArticleGroup>
    <div className="panel-collapse">
      <SidePanelHeader>Tags</SidePanelHeader>
    </div>
    <div className="panel-collapse">
      <TagPanel tags={this.props.tags}></TagPanel>
    </div>
    <SidePanelFooter>Codime</SidePanelFooter>
    </div>
    );
  }
});

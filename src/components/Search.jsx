class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  queryHandler(event) {
    this.setState({
      query: event.target.value
    });

    // call keyHandler
    this.props.keyHandler(event.target.value);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input onChange={this.queryHandler.bind(this)} className="form-control" type="text" value={this.state.query} />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;

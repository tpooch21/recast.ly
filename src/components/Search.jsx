

var Search = (props) => {

  // Input and button elements make calls to searchYouTube API via respective event handlers
  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onKeyPress={() => {props.onSearch(event.target.value)}} />
      <button className="btn hidden-sm-down" onClick={() => {props.onSearch(event.target.previousElementSibling.value)}}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;

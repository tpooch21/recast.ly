

var Search = (props) => {
  var submitForm = (event) => {
    props.onSubmit(event.target.previousElementSibling.value);
  };

  var keyPress = (event) => {
    debugger;
    props.keyUp(event.target.value);
  };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onKeyPress={keyPress} />
      <button className="btn hidden-sm-down" onClick={submitForm}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;

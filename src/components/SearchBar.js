import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
    //  console.log(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <label>Image Search</label>
          <input
            class="prompt field"
            type="text"
            placeholder="Search things.."
            value={this.state.term}
            onChange={e => {
              this.setState({ term: e.target.value });
              //  console.log(e.target.value);
            }}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;

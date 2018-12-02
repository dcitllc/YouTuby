import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    //TODO: Make sure we call callback from parent
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment search-bar ">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="">Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

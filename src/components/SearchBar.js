import React from 'react';

class SearchBar extends React.Component  {
  state= {term : ''}


  render(){
    return ( <div className="ui segment">
      <form className="ui form">
        <label>Image Search</label>
        <input class="prompt field" type="text" placeholder="Search things.." value={this.state.term} onChange={e => this.setState({term :e.target.value})}/>
        </form>
      </div>
    )
  }
}

export default SearchBar;

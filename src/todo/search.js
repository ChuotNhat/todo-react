import React, {Component} from 'react';
class Search extends Component {
  render(){
    return (
      <div  className="search-custom">
        <input 
          type="text"
          value={this.props.valueSearch}
          onChange={this.props.handleChangeSearch}
          placeholder="Search free text" />
      </div>
    );
  }
}
export default Search;
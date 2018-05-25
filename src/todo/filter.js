import React, {Component} from 'react';
class Filter extends Component {
  render(){
    return (
      <div className="filter-select">
        <select 
          value={this.props.valueFilterSelect} 
          onChange={this.props.changeSelect}>
          <option value="all">Tất cả</option>
          <option value="memozied">Từ đã nhớ</option>
          <option value="not-memozied">Tù chưa nhớ</option>
        </select>
      </div>
    );
  }
}
export default Filter;
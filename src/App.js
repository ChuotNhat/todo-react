import React, { Component } from 'react';
import './App.css';
import Form from './todo/form.js';
import ItemList from './todo/itemlist.js';
import Filter from './todo/filter.js';
import Search from './todo/search.js';
var obj = [{eng:'hello', vn: 'xin chào', memozied: false, key: 1}, {eng:'goodbye', vn: 'tạm biệt', memozied: true, key: 2}];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueFilter: 'all',
      valueEngItem: '', 
      valueVNItem: '',
      array : obj,
      arrayFilter: obj,
      valueSearch: '',
      valueSearchItem: ''
    };

    this.addDictionary = this.addDictionary.bind(this);
    this.changeEng = this.changeEng.bind(this);
    this.changeVN = this.changeVN.bind(this);
    this.changeValueSelect = this.changeValueSelect.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  addDictionary(event) {
    event.preventDefault();
    if (this.state.valueEngItem && this.state.valueVNItem) {
      var newName = {
        eng: this.state.valueEngItem,
        vn: this.state.valueVNItem,
        memozied: false,
        key: this.state.array.length + 1
      }
      this.setState((prevState) => {
        return {
          arrayFilter: prevState.arrayFilter.concat(newName),
          array: prevState.array.concat(newName)
        }
      });
      this.setState({
        valueEngItem : '',
        valueVNItem: ''
      });
    }
    
  }
  changeEng(event) {
    this.setState({valueEngItem: event.target.value});
  }
  changeVN(event) {
    this.setState({valueVNItem: event.target.value});
  }

  handleDeleteItem(id) {
    this.setState((prevState) => {
      return {
        array: prevState.arrayFilter.filter(array => array.key !== id),
        arrayFilter: prevState.arrayFilter.filter(array => array.key !== id)
      }
    });
  }

  changeValueSelect(event) {
    this.setState({
      valueFilter: event.target.value
    });
    if (event.target.value === 'memozied') {
      this.setState({array: this.state.arrayFilter.filter(array => array.memozied === true)});
    } else if (event.target.value === 'not-memozied') {
      this.setState({array: this.state.arrayFilter.filter(array => array.memozied === false)});
    } else if (event.target.value === 'all') {
      this.setState({array: this.state.arrayFilter});
    }
  }
  
  changeSearch(event) {
    this.setState({valueSearch: event.target.value});
  }
  handleSearch(event) {
    var valueSelf = event.target.value;
    this.setState({
      valueSearchItem: valueSelf,
      array: this.state.arrayFilter.filter(array => array.eng.indexOf(valueSelf) !== (-1) || array.vn.indexOf(valueSelf) !== (-1))
    });
    
  }

  render() {
    return (
      <div className="container">
        <Form 
          addWord = {this.addDictionary} 
          handleChangeEng={this.changeEng}
          handleChangeVN={this.changeVN}
          valueEng= {this.state.valueEngItem}
          valueVN= {this.state.valueVNItem} />
        <Search
          valueSearch={this.state.valueSearchItem}
          handleChangeSearch={this.handleSearch}/>
        <Filter
          changeSelect = {this.changeValueSelect}
          valueFilterSelect = {this.state.valueFilter} />
        <ItemList 
          arrayString={this.state.array} 
          WordDelete={this.handleDeleteItem.bind(this)} />
      </div>
    );
  }
}
export default App;

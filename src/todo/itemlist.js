import React, {Component} from 'react';
import Item from './item.js';
class ItemList extends Component {
  render(){
    return (
      <ul>
        {this.props.arrayString.map((string) =>(
          <Item 
            key={string.key} 
            valueEng={string.eng}
            valueVN={string.vn}
            valueKey={string.key} 
            itemDelete={this.props.WordDelete.bind(this)}
            isMemozied={string.memozied ? 'redClass' : 'blueClass'}
          />
        ))}
      </ul>
    );
  }
}
export default ItemList;
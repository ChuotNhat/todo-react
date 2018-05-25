import React, {Component} from 'react'
class Item extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = (
      {
        isLine: false
      }
    );
  }
  handleDelete() {
    this.props.itemDelete(this.props.valueKey);
  }
  render() {
    return(
      <li index={this.props.valueKey}>
        <div>
          <span onClick={this.handleClick} className={this.props.isMemozied}>{this.props.valueEng}</span>
          <span> -- </span>
          <span>{this.props.valueVN}</span>
        </div>
        <button onClick={this.handleDelete} className="btn btn--delete">Delete</button>
      </li>
    );
  }
}
export default Item;
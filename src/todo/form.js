import React, { Component } from 'react';
class Form extends Component {
  render() {
    return (
      <div>
        <h3>dictionary english</h3>
        <form onSubmit={this.props.addWord} className="form-add">
          <input type="text" name="eng" placeholder="Input English" value={this.props.valueEng} onChange={this.props.handleChangeEng}/>
          <input type="text" name="vn" placeholder="Input VietNamese" value={this.props.valueVN} onChange={this.props.handleChangeVN}/>
          <button type="submit" className="btn btn--submit"> add dictionary </button>
        </form>
      </div>
    );
  }
}

export default Form;
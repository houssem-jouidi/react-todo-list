import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props
    return <div className="card card-body my3">
      <form onSubmit={handleSubmit} >
        <div className="input-group">
          <div className=" input-group-prepend">
            <div className=" input-group-text bg-primary text-white">
              <i className="fas fa-book" ></i>
            </div>
          </div>
          <input type="text" value={item} onChange={handleChange} className="form-control text-capitalize" placeholder="add a todo item" />
        </div>
        <button type="submit" className={
          editItem ? 'btn btn-block text-capitalize btn-success mt-2' : 'btn btn-block text-capitalize btn-primary mt-2'
        } >{editItem ? 'edit item' : 'add item'}</button>
      </form>
    </div>;
  }
}

import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props
    return (
      <ul className="list-group my-5">
        <h3 className=" text-capitalize text-center" >todo list</h3>
        {
          items.map(item => {
            return (
              <TodoItem key={item.id} handleEdit={() => handleEdit(item.id)} handleDelete={() => handleDelete(item.id)} title={item.title} />
            )
          })
        }

        <button onClick={clearList} type="submit" className="btn btn-block text-capitalize btn-danger mt-5" >clear list</button>
      </ul>
    );
  }
}

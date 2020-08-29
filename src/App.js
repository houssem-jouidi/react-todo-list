import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from 'uuid';

class App extends Component {
    state = {
        items: [],
        id: uuid(),
        item: '',
        editItem: false
    };
    handleChange = (e) => {
        this.setState({
            item: e.target.value
        });
    };
    handleSubmit = (e) => {
        e.preventDefault()
        const newItem = {
            id: this.state.id,
            title: this.state.item
        };
        const updateItems = [...this.state.items, newItem];

        this.setState({
            items: updateItems,
            item: '',
            id: uuid(),
            editItem: false
        });
    };
    clearList = (e) => {
        e.preventDefault();
        this.setState({
            items: []
        })

    }
    handleDelete = (id) => {
        const filterItems = this.state.items.filter(item => {
            return item.id !== id
        });
        this.setState({
            items: filterItems
        });
    }
    handleEdit = (id) => {
        const filterItems = this.state.items.filter(item => {
            return item.id !== id
        });
        const selectedItem = this.state.items.find(item => {
            return item.id === id
        });


        this.setState({
            items: filterItems,
            item: selectedItem.title,
            editItem: true,
            id: id
        });
    }
    render() {
        return (
            <div className="container" >
                <div className="row" >
                    <div className="col-10 mx-auto md-8 mt-4" >
                        <h3 className="text-capitalize text-center">todo input</h3>
                        <TodoInput item={this.state.item} editItem={this.state.editItem} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                        <TodoList items={this.state.items} handleEdit={this.handleEdit} handleDelete={this.handleDelete} clearList={this.clearList} />
                    </div> </div> </div>
        );
    }
}

export default App;
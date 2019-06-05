import React, { Component } from 'react';
import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import SearchPannel from '../search-pannel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import './app.css';
export default class App extends Component {
    maxId = 100;
    state = {
        todoData: [
            this.setNewItem('Drink Coffee1'),
            this.setNewItem('Make Awesome App'),
            this.setNewItem('Have a lunch'),
            this.setNewItem('Have a Diener')
        ]
    };
    setNewItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    };
    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            return {
                todoData: todoData.filter((el, i) => i !== idx)
            };
        });
    };
    AddItem = (text) => {
        this.setState({
            todoData: [...this.state.todoData, this.setNewItem(text)]
        })
    }
    toggleItemProperty(item_id, property) {
        const idx = this.state.todoData.findIndex((item) => item.id === item_id)
        const before = this.state.todoData.slice(0, idx);
        const after = this.state.todoData.slice(idx + 1);
        const newItem = { ...this.state.todoData[idx], [property]: !this.state.todoData[idx][property] }
        this.setState({
            todoData: [
                ...before,
                newItem,
                ...after
            ]
        });
    }
    onToggleImportant = (id) => {
        this.toggleItemProperty(id, 'important')
    }
    onToggleDone = (id) => {
        this.toggleItemProperty(id, 'done')
    }
    render() {
        const {todoData} = this.state;
        let itemDoneCounter = todoData.filter(item => item.done).length;
        let itemNotDoneCounter = todoData.length - itemDoneCounter;
        return (

            <div className='todo-app' >
                <AppHeader toDo={itemNotDoneCounter} done={itemDoneCounter} />
                <div className='top-pannel d-flex'>
                    <SearchPannel />
                    <ItemStatusFilter />
                </div>
                <TodoList todos={todoData}
                    onDeleted={this.deleteItem}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                />
                <ItemAddForm AddItem={this.AddItem} />
            </div >
        );
    }
};
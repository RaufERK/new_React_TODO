import React, { Component } from 'react';
import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import SearchPannel from '../search-pannel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {
    index=100;
    state = {
        todoData: [
            { label: 'Drink Coffee1', important: false, id: 1 },
            { label: 'Make Awesome App', important: true, id: 2 },
            { label: 'Have a lunch', important: false, id: 3 },
            { label: 'Have a Diener', important: false, id: 4 }
        ]
    };
    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);        
            return {
                todoData: todoData.filter((el,i) => i!== idx)
            };
        });
    };
    AddItem = (text) =>{
      this.setState ({
        todoData: [...this.state.todoData,{ label: text, important: false, id: this.index++ }]
      })
    }
    render() {
        return (
            <div className='todo-app' >
                <AppHeader toDo={1} done={3} />
                <div className='top-pannel d-flex'>
                    <SearchPannel />
                    <ItemStatusFilter />
                </div>
                <TodoList todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                />
                <ItemAddForm AddItem={this.AddItem}/>
            </div >
        );
    }
};
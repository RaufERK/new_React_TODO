import React, { Component } from 'react';
import './item-add-form.css'


export default class ItemAddForm extends Component {

    render() {
        return (
            <div>
                <input id='myInput'
                    placeholder={'Add new Item'}

                    onKeyDown={() => console.log()}

                />
                <button>ADD</button>
            </div>
        )
    }
}
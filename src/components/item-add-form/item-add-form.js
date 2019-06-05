import React, { Component } from 'react';
import './item-add-form.css'
export default class ItemAddForm extends Component {
    state = {
        text : ''
    }    
    putStringInState = (e) =>{
        this.setState({
            text: e.target.value
        });     
    }
    render() {
        return (
            <div>
                <input id='myInput'
                    placeholder={'Add new Item'}

                    onChange={(e)=>this.putStringInState(e)}

                />
                <button
                    onClick={()=>this.props.AddItem(this.state.text)}
                >ADD</button>
            </div>
        )
    }
}
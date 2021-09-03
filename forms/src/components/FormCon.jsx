import React, {Component} from 'react';

class FormCon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            textarea: '',
            selectvalue: 'react',
            selectedBtn: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleTextareaChange = (event) => {
        this.setState({
            textarea: event.target.value
        })
    }

    handleSelectvalueChange = (event) => {
        this.setState({
            selectvalue: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.textarea} ${this.state.selectvalue}`)
        event.preventDefault();
    }

    handleReset = (event) => {
        this.setState({
            username: '',
            textarea: '',
            selectvalue: 'react'
        })
    }

    handleRadioBtnChange = (event) => {
        this.setState({
            selectedBtn: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}
                  onReset={this.handleReset}>
                <div>
                    <label>Username</label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>Textarea</label>
                    <textarea
                    value={this.state.textarea}
                    onChange={this.handleTextareaChange}
                    />
                </div>
                <div>
                    <label>Dropdown list</label>
                    <select value={this.state.selectvalue} onChange={this.handleSelectvalueChange}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>
                <div>
                    <label>RadioBTN</label>
                    <input type='radio' name='rgb' value='red' 
                        checked={this.state.selectedBtn === 'red'} 
                        onChange={this.handleRadioBtnChange}
                    />Red
                    <input type='radio' name='rgb' value='green'
                        checked={this.state.selectedBtn === 'green'}
                        onChange={this.handleRadioBtnChange}
                    />Green
                    <input type='radio' name='rgb' value='blue'
                        checked={this.state.selectedBtn === 'blue'}
                        onChange={this.handleRadioBtnChange}
                    />Blue
                </div>
                <button type='submit'>Submit</button>
                <button type='reset'>Reset</button>
            </form>
        )
    }
}

export default FormCon
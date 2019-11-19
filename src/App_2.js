import React from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';

const messageAction = (message) => {
    return {
        type: 'message',
        msg: message
    }
}

const messageReducer = (state, action) => {
    switch(action.type) {
        case 'message':
            return {...state, ...{msg: action.msg}};
        default:
            return state;
    }
}

export const configureStore = (state = {msg: ''}) => {
    return createStore(messageReducer, state);
}

const mapStateToProps = (state) => {
    return {...state};
}

const mapDispatchToProps = (dispatch) => {
    return {
        messageAction:(msg)=> dispatch(messageAction(msg))
    }
}

class App_2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({msg: e.target.value});
    }

    render() {
        let pStyle = {
            borderBottom: '1px solid white',
            position: 'absolute',
            top: '50px',
            left: '50px'
        }

        let divStyle = {
            border: '1px solid white',
            padding: '5px',
            color: 'white'
        }

        return (
        <div className="App">
          <header className="App-header">
              <p className="shownText" style={pStyle}>{this.props.msg}</p>
              <h2>I am learning</h2>
              <input type="text" value={this.state.msg} onChange={this.handleChange} />
              <div style={divStyle} onClick={this.props.messageAction(this.state.msg)}>Show the message</div>
          </header>
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App_2);

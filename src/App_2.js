import React from 'react';

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
        return (
        <div className="App">
          <header className="App-header">
              <p className="shownText" style={pStyle}>{this.state.msg}</p>
              <h2>I am learning</h2>
              <input type="text" value={this.state.msg} onChange={this.handleChange} />
          </header>
        </div>
      );
    }
}

export default App_2;

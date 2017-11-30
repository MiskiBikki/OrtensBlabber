import React from 'react'


class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0,
    }
  }

  render() {
    
    return (

      <div className="container">
      
        <button
          onClick={() => {
            this.setState({ number: 
              this.state.number + 1 }) }}
          className="buttons"
          >+</button>

        <div className="result">{this.props.votes}</div>
        
        <button onClick={() => {
          this.setState({ number:
             this.state.number - 1 }) }}
          className="buttons"
          >-</button>
      </div>
    )
  }
}


export default Counter
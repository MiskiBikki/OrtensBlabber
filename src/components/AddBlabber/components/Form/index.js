import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = { text:''}
    }
    
    render() {
        return (
            <div>
            <textarea
            value={this.state.text}
            placeholder="Type your blabber here..."
            onChange={(event) => 
                { this.setState({ text: event.currentTarget.value}) }}
            />
            
            <button className="button button2" onClick= {() => {
                fetch('http://blabber-api.herokuapp.com/blabbers', {
                    method: 'POST',
                    headers: {
                        'Content-type':'application/json'
                    },
                    body: JSON.stringify ({ text: this.state.text})
                })
                .then(response => response.json())
                .then(json => {
                    console.log(json)
                   
                })
                
                this.setState({
                    text:''
                })
            }}><span>Babbel away</span></button>
            </div>
        )
    }
}

export default Form
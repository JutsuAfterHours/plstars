import React, {Component} from "react"; 

class ErrorBoundary extends Component {
    constructor(){
        super()
        this.state = {
            hasErrors : false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasErrors : true})
    }

    render(){
        if(this.state.hasErrors){
            return <h1>Oops, there was an error. Please try again later</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;
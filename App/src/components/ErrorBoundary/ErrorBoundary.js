import React, {Component} from 'react';

// note, this only works with React v16+
// also note that the error message will not correctly display in developer mode
// only use them on code that has a chance to fail! dont use them everywhere
class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }

    render() {

        if (this.state.hasError) {
            // it will return an error if the child component has an error
            return <h1>{this.state.errorMessage}</h1>;
        } else {
            // it will return whatever you wrapped with ErrorBoundary aka the child component
            return this.props.children;
        }
        
    }
}

export default ErrorBoundary;
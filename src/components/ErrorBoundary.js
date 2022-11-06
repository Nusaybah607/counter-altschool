import {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { error:null, errorInfo: null };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo){
        console.log(error, errorInfo);
    }

    render() {
      if (this.state.errorInfo) {
        return (
        <div className ="error-boundary">
        <h1>Something went wrong.</h1>
        <details>
            {this.state.error && 
            this.state.error.toString()}
            <br/>
        </details>
        </div>
        );
      }
      return this.props.children; 
    }
  }
  export default ErrorBoundary
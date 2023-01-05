import React from "react";
import { useState } from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // catch errors in any component and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
function BuggyCounter() {
  const [value, setValue] = useState(0);
  if (value === 4) {
    throw new Error("I crashed");
  }
  return (
    <div className="error-boundary_content">
      <p>{value}</p>
      <button onClick={() => setValue((oldValue) => oldValue + 1)}>
        increase
      </button>
    </div>
  );
}
const ErrorCounter = () => {
  
  return (
    <div className="error-boundary">
      <h3>Increase counter to 4 to test error boundary</h3>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </div>
  );
};

  export default ErrorCounter
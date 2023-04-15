import React from 'react';

class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) {
    // Log the error to an error tracking service
    console.log(error);
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
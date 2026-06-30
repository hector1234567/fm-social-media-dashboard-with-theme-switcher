import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="max-w-279 mx-auto p-3">
          <h2 className="text-red-600">
            There was an error.{" "}
            <a className="font-bold underline" href="/">
              Reload
            </a>
          </h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

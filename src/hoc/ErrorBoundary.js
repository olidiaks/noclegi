import {Component} from "react";

class ErrorBoundary extends Component {
    state = {
        hasError: false,
    };

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        console.log('Error Boundary');
        console.error(error, errorInfo);
    }

    render() {
        return this.state.hasError ?
            <div className="alert alert-danger">Przepraszamy ale strona internetowa odmówiła posłuszeństwa.</div> :
            this.props.children;
    };
}

export default ErrorBoundary;
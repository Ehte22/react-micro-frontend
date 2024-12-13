import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = { hasError: false };

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.error('Error loading micro-frontend:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h2>Failed to load the requested module. Please try again later.</h2>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

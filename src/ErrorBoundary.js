import React, { useState } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = (error, info) => {
    console.error("Error in HelpWidget:", error, info);
    setHasError(true);
  };

  if (hasError) {
    return null;
  }

  return (
    <ErrorBoundaryWrapper onError={handleError}>
      {children}
    </ErrorBoundaryWrapper>
  );
};

const ErrorBoundaryWrapper = ({ onError, children }) => {
  React.useEffect(() => {
    const errorHandler = (error) => onError(error, error?.info);
    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, [onError]);

  return <>{children}</>;
};

export default ErrorBoundary;

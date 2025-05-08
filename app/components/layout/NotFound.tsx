import { Link } from '@remix-run/react';

export default function NotFound() {
  return (
    <div className="error-container">
      <div className="error-card">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for doesn't exist or has been moved</p>
        <Link to="/" className="error-button">
          Back to home
        </Link>
      </div>
    </div>
  );
}

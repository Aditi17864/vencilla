import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container-vc section text-center">
      <span className="eyebrow">404</span>
      <h1 className="mt-4 text-3xl mb-6">Page not found</h1>
      <Link to="/" className="btn-primary">Back to Home</Link>
    </div>
  );
}

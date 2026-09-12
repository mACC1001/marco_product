import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-16">
      <div className="max-w-lg text-center">
        <p className="text-violet-400 font-medium mb-4">404</p>
        <h1 className="text-white text-3xl sm:text-4xl font-medium mb-4">
          Page not found
        </h1>
        <p className="text-slate-400 mb-8">
          The page you’re looking for doesn’t exist. Head back home to explore my work.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-white text-slate-950 rounded-lg hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}

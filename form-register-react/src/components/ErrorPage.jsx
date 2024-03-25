import React from 'react'
import {Link} from 'react-router-dom'

function ErrorPage() {
  return (
    <div className="bg-gray-100 min-h-screen px-6 py-8 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-red-500 mb-4">Whoops! Looks like something went wrong.</h1>
      <p className="text-gray-700 text-lg">
        The page you're trying to access could not be found. It might be temporarily unavailable, or the link you followed may be incorrect.
      </p>
      <div className="flex flex-row mt-8 space-x-4">
        <Link to="/" className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700">
          Go to Homepage
        </Link>
        <Link to="#" className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200">
          Report this issue
        </Link>
      </div>
    </div>
  );
}


export default ErrorPage
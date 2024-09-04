import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        <a className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700">
          Go back to Home
        </a>
      </Link>
    </div>
  );
}

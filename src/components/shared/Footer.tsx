import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-10 md:mt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-600 text-center md:text-left">
          &copy; {new Date().getFullYear()} Library. All rights reserved.
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-indigo-600 transition-colors"
          >
            All Books
          </Link>
          <Link
            to="/add-book"
            className="text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Add Book
          </Link>
          <Link
            to="/borrow-summary"
            className="text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Borrow Summary
          </Link>
        </div>
      </div>
    </footer>
  );
}

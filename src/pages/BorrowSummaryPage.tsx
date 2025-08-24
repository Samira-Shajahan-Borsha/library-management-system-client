/* eslint-disable @typescript-eslint/no-explicit-any */
import Spinner from "@/components/shared/Spinner";
import { useGetBorrowSummaryQuery } from "@/redux/api/bookApi";
import { Link } from "react-router";

const BorrowSummaryPage = () => {
  const { data, isLoading, isError } = useGetBorrowSummaryQuery(undefined);

  if (isLoading) {
    return <Spinner isLoading={isLoading} />;
  }

  if (isError || !data?.data) {
    return (
      <div className="text-center text-red-500 mt-10">
        Failed to load borrow summary.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-semibold mb-6">Borrow Summary</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2 border-b">Book Title</th>
              <th className="text-left px-4 py-2 border-b">ISBN</th>
              <th className="text-center px-4 py-2 border-b">Total Borrowed</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.length > 0 ? (
              data.data.map((borrow: any) => (
                <tr
                  key={borrow?.book?.isbn}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-2 border-b">{borrow.book.title}</td>
                  <td className="px-4 py-2 border-b">{borrow.book.isbn}</td>
                  <td className="text-center px-4 py-2 border-b font-medium">
                    {borrow.totalQuantity}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center py-6 text-gray-500">
                  No books have been borrowed yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-6">
        <Link
          to="/"
          className="text-indigo-600 hover:text-indigo-800 font-medium"
        >
          ← Back to All Books
        </Link>
      </div>
    </div>
  );
};

export default BorrowSummaryPage;

/* eslint-disable no-unsafe-optional-chaining */
import { Button } from "@/components/ui/button";
import { useGetBookByIdQuery } from "@/redux/api/bookApi";
import { useParams } from "react-router";
import BookHeroImg from "@/assets/annelies-geneyn-bhBONc07WsI-unsplash.webp";
import BookDetailLoading from "@/components/modules/books/BookDetailLoading";

const BookDetailPage = () => {
  const { bookId } = useParams();
  const { data, isLoading } = useGetBookByIdQuery(bookId);

  if (isLoading) {
    return <BookDetailLoading />;
  }

  if (!data?.data) {
    return (
      <div className="max-w-7xl mx-auto p-6 text-center text-red-500">
        Book not found.
      </div>
    );
  }

  const { title, author, genre, isbn, description, copies, available } =
    data?.data;

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative w-full h-64 sm:h-80 md:h-[500px] overflow-hidden rounded-b-lg">
        <img
          src={BookHeroImg}
          alt="Book Hero"
          className="w-full h-full object-cover brightness-95"
        />

        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent pointer-events-none"
        />

        <div className="absolute inset-0 flex items-center justify-center px-4 pointer-events-none">
          <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-md pointer-events-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-md text-center">
              {title}
            </h1>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <div className="flex flex-col  gap-8">
          <div className="flex-1 min-w-0">
            <h2 className="sr-only">Description</h2>
            <p className="text-gray-800 text-base sm:text-lg md:text-lg leading-relaxed">
              <span className="font-medium">Description:</span> {description}
            </p>
          </div>

          <aside className="w-full lg:w-96 flex-shrink-0">
            <div className="rounded-lg bg-gray-50 p-4">
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500">Author</p>
                  <p className="text-sm font-semibold text-gray-800 mt-1 truncate">
                    {author}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Genre</p>
                  <p className="text-sm font-semibold text-gray-800 mt-1">
                    {genre?.charAt(0) + genre?.slice(1)?.toLowerCase()}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">ISBN</p>
                  <p className="text-sm font-semibold text-gray-800 mt-1 break-all">
                    {isbn}
                  </p>
                </div>
              </div>

              <hr className="my-4 border-t border-gray-200" />

              <div className="flex flex-col  gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex self-start items-center px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${
                      available && copies > 0
                        ? "bg-green-50 text-green-800"
                        : "bg-red-50 text-red-800"
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    {available && copies > 0 ? "Available" : "Not Available"}
                  </span>

                  <div className="text-sm text-gray-700 font-medium">
                    Copies: {copies}
                  </div>
                </div>

                <div className="w-full sm:w-auto">
                  {available && copies > 0 ? (
                    <Button variant="default">Borrow Book</Button>
                  ) : (
                    <Button disabled variant="default">
                      Borrow Unavailable
                    </Button>
                  )}
                </div>
              </div>

              {/* optional tiny help text */}
              <p className="mt-3 text-xs text-gray-500">
                If you borrow this book, your number of borrowed items will be
                updated.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default BookDetailPage;
